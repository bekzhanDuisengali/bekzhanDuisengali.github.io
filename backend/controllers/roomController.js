const pool = require('../db');

exports.getRoomUsers = async (req, res) => {
    const { roomId } = req.query;

    try {
        const users = await pool.query(`
            SELECT u.id, u.username
            FROM users u
                     JOIN user_rooms ur ON u.id = ur.user_id
            WHERE ur.room_id = $1::uuid
        `, [roomId]);

        res.json(users.rows);
    } catch (err) {
        console.error("Ошибка при получении пользователей комнаты:", err.message);
        res.status(500).json({ error: "Ошибка получения пользователей" });
    }
};


exports.createRoom = async (req, res) => {
    const { topic_id, name, room_id, language, level, user_id, capacity } = req.body;

    if (!topic_id || !name || !room_id || !language || !level || !capacity || !user_id) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const query = `
            INSERT INTO rooms (id, name, topic_id, language, level, created_at, capacity, is_active)
            VALUES ($1, $2, $3, $4, $5, NOW(), $6, true)
                RETURNING id
        `;
        const values = [room_id, name, topic_id, language, level, capacity];
        const result = await pool.query(query, values);

        const userRoomQuery = `
            INSERT INTO user_rooms (user_id, room_id)
            VALUES ($1, $2)
        `;
        await pool.query(userRoomQuery, [user_id, room_id]);

        res.status(201).json({ message: 'Room created successfully', roomId: result.rows[0].id });
    } catch (error) {
        console.error('Error creating room:', error);
        res.status(500).json({ message: 'Error creating room', error });
    }
};

exports.getActiveRooms = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT r.id, r.name, r.language, r.level, r.capacity, t.name AS topic,
                   (SELECT COUNT(*) FROM user_rooms ur WHERE ur.room_id = r.id) AS current_users
            FROM rooms r
                     JOIN topics t ON r.topic_id = t.id
            WHERE r.is_active = true
        `);
        res.json(result.rows);
    } catch (error) {
        console.error("Ошибка при получении активных комнат:", error);
        res.status(500).json({ error: "Ошибка сервера" });
    }
};


exports.closeRoom = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM user_rooms WHERE room_id = $1', [id]);

        const checkUsers = await pool.query('SELECT COUNT(*) FROM user_rooms WHERE room_id = $1', [id]);
        const userCount = parseInt(checkUsers.rows[0].count, 10);

        if (userCount === 0) {
            await pool.query('UPDATE rooms SET is_active = false WHERE id = $1', [id]);
        }

        res.json({ message: 'Пользователь вышел из комнаты' });
    } catch (err) {
        console.error('Ошибка при выходе из комнаты:', err);
        res.status(500).json({ error: 'Не удалось выйти из комнаты' });
    }
};

exports.joinRoom = async (req, res) => {
    const { room_id, user_id } = req.body;

    try {
        const exists = await pool.query(
            'SELECT 1 FROM user_rooms WHERE user_id = $1 AND room_id = $2',
            [user_id, room_id]
        );

        if (exists.rowCount > 0) {
            return res.json({ message: 'Пользователь уже в комнате' });
        }

        const countRes = await pool.query(
            'SELECT COUNT(*) FROM user_rooms WHERE room_id = $1',
            [room_id]
        );
        const currentUsers = parseInt(countRes.rows[0].count, 10);

        const capacityRes = await pool.query(
            'SELECT capacity FROM rooms WHERE id = $1',
            [room_id]
        );
        const capacity = capacityRes.rows[0].capacity;

        if (currentUsers >= capacity) {
            return res.status(403).json({ message: 'Комната переполнена' });
        }
        if (exists.rowCount === 0) {
            await pool.query(
                'INSERT INTO user_rooms (user_id, room_id) VALUES ($1, $2)',
                [user_id, room_id]
            );

            await pool.query('UPDATE rooms SET is_active = true WHERE id = $1', [room_id]);
        }

        res.json({ message: 'Пользователь присоединился к комнате' });
    } catch (err) {
        console.error("Ошибка при присоединении к комнате:", err);
        res.status(500).json({ error: "Не удалось присоединиться к комнате" });
    }
};