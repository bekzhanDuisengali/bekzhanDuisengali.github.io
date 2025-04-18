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
    const { topic_id, name, room_id, language, level, user_id } = req.body;

    if (!topic_id || !name || !room_id || !language || !level || !user_id) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const query = `
            INSERT INTO rooms (id, name, topic_id, language, level, created_at)
            VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING id
        `;
        const values = [room_id, name, topic_id, language, level];
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