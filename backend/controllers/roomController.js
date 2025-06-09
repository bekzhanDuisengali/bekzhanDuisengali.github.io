const pool = require('../db');
const roomsInMemory = require('../socket/room'); // In-memory storage for rooms

// Get users of a room
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
        console.error("Error fetching room users:", err.message);
        res.status(500).json({ error: "Error fetching room users" });
    }
};

// Create a room
exports.createRoom = async (req, res) => {
    const { topic_id, name, room_id, language, level, user_id, capacity } = req.body;

    if (!topic_id || !name || !room_id || !language || !level || !capacity || !user_id) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Insert the room into the database
        const query = `
            INSERT INTO rooms (id, name, topic_id, language, level, created_at, capacity, is_active)
            VALUES ($1, $2, $3, $4, $5, NOW(), $6, true)
                RETURNING id
        `;
        const values = [room_id, name, topic_id, language, level, capacity];
        const result = await pool.query(query, values);

        // Add the first user to the room
        const userRoomQuery = `
            INSERT INTO user_rooms (user_id, room_id)
            VALUES ($1, $2)
        `;
        await pool.query(userRoomQuery, [user_id, room_id]);

        // Create the room in memory
        if (!roomsInMemory.rooms[room_id]) {
            roomsInMemory.rooms[room_id] = {
                members: [{ userId: user_id, username: 'admin', isReady: false }],
                gameStarted: false,
            };
        }

        res.status(201).json({ message: 'Room created successfully', roomId: result.rows[0].id });
    } catch (error) {
        console.error('Error creating room:', error);
        res.status(500).json({ message: 'Error creating room', error });
    }
};

// Get all active rooms
exports.getActiveRooms = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT r.id, r.name, r.language, r.level, r.capacity, t.name AS topic,
                   (SELECT COUNT(*) FROM user_rooms ur WHERE ur.room_id = r.id) AS current_users
            FROM rooms r
                     JOIN topics t ON r.topic_id = t.id
            WHERE r.is_active = true
        `);
        const rooms = result.rows.map(room => ({
            ...room,
            current_users: Number(room.current_users)
        }));
        res.json(rooms);

    } catch (error) {
        console.error("Error fetching active rooms:", error);
        res.status(500).json({ error: "Server error" });
    }
};

// Close a room
// exports.closeRoom = async (req, res) => {
//     const { id } = req.params;
//     try {
//         // Remove all users from the room
//         await pool.query('DELETE FROM user_rooms WHERE room_id = $1', [id]);
//
//         // Check if any users remain in the room
//         const checkUsers = await pool.query('SELECT COUNT(*) FROM user_rooms WHERE room_id = $1', [id]);
//         const userCount = parseInt(checkUsers.rows[0].count, 10);
//
//         // If no users left, mark room as inactive
//         if (userCount === 0) {
//             await pool.query('UPDATE rooms SET is_active = false WHERE id = $1', [id]);
//         }
//
//         res.json({ message: 'User has left the room' });
//     } catch (err) {
//         console.error('Error leaving the room:', err);
//         res.status(500).json({ error: 'Failed to leave the room' });
//     }
// }; // старый метод close room

exports.leaveRoom = async (req, res) => {
    const { roomId, userId } = req.body;

    if (!roomId || !userId) {
        return res.status(400).json({ error: 'Missing roomId or userId' });
    }

    try {
        // Удаляем только этого пользователя из комнаты
        await pool.query('DELETE FROM user_rooms WHERE room_id = $1 AND user_id = $2', [roomId, userId]);

        // Проверяем, есть ли еще пользователи в комнате
        const checkUsers = await pool.query('SELECT COUNT(*) FROM user_rooms WHERE room_id = $1', [roomId]);
        const userCount = parseInt(checkUsers.rows[0].count, 10);

        // Если никого не осталось — ставим комнату неактивной
        if (userCount === 0) {
            await pool.query('UPDATE rooms SET is_active = false WHERE id = $1', [roomId]);
            delete roomsInMemory.rooms[roomId];
        } else {
            if (roomsInMemory.rooms[roomId]) {
                roomsInMemory.rooms[roomId].members = roomsInMemory.rooms[roomId].members.filter(
                    member => member.userId !== userId
                );
            }
        }

        res.json({ message: 'User has left the room' });
    } catch (err) {
        console.error('Error leaving the room:', err);
        res.status(500).json({ error: 'Failed to leave the room' });
    }
};

// Join a user to a room
exports.joinRoom = async (req, res) => {
    const { room_id, user_id } = req.body;
    console.log("Request data:", req.body);
    console.log("User joined room:", room_id, user_id);
    try {
        // Check if the user is already in the room
        const exists = await pool.query(
            'SELECT 1 FROM user_rooms WHERE user_id = $1 AND room_id = $2',
            [user_id, room_id]
        );

        if (exists.rowCount > 0) {
            return res.json({ message: 'User is already in the room' });
        }

        // Get current number of users in the room
        const countRes = await pool.query(
            'SELECT COUNT(*) FROM user_rooms WHERE room_id = $1',
            [room_id]
        );
        const currentUsers = parseInt(countRes.rows[0].count, 10);

        // Get room capacity
        const capacityRes = await pool.query(
            'SELECT capacity FROM rooms WHERE id = $1',
            [room_id]
        );

        if (capacityRes.rows.length === 0) {
            return res.status(404).json({ message: 'Room not found' });
        }

        const capacity = capacityRes.rows[0].capacity;

        // Check if the room is full
        if (currentUsers >= capacity) {
            return res.status(403).json({ message: 'Room is full' });
        }

        // Add the user to the user_rooms table
        await pool.query(
            'INSERT INTO user_rooms (user_id, room_id) VALUES ($1, $2)',
            [user_id, room_id]
        );

        // Update room status to active
        await pool.query('UPDATE rooms SET is_active = true WHERE id = $1', [room_id]);

        // Add user to in-memory room
        if (roomsInMemory.rooms[room_id]) {
            roomsInMemory.rooms[room_id].members.push({
                userId: user_id,
                username: `User${user_id}`, // Replace with actual username if available
                isReady: false,
            });
        }

        res.json({ message: 'User joined the room' });
    } catch (err) {
        console.error("Error joining room:", err);
        res.status(500).json({ error: "Failed to join room" });
    }
};

// Fully close a room (remove from memory and database)
exports.closeRoomCompletely = async (req, res) => {
    const { id } = req.params;

    try {
        // Remove all users from the room
        await pool.query('DELETE FROM user_rooms WHERE room_id = $1', [id]);

        // Mark room as inactive in the database
        await pool.query('UPDATE rooms SET is_active = false WHERE id = $1', [id]);

        // Delete the room from memory
        delete roomsInMemory.rooms[id];

        res.json({ message: 'Room completely closed' });
    } catch (err) {
        console.error('Error fully closing the room:', err);
        res.status(500).json({ error: 'Failed to fully close the room' });
    }
};

exports.setUserReady = async (req, res) => {
    const { roomId } = req.body; // получаем roomId из тела запроса
    const userId = req.user.id; // получаем userId из объекта пользователя, авторизованного в системе

    try {
        // Сначала получаем текущий статус готовности пользователя
        const result = await pool.query(
            'SELECT is_ready FROM user_rooms WHERE room_id = $1 AND user_id = $2',
            [roomId, userId]
        );

        if (result.rows.length === 0) {
            return res.sendStatus(404); // Если не нашли пользователя в комнате, отправляем 404
        }

        const currentStatus = result.rows[0].is_ready;

        // Переключаем состояние ready
        const newStatus = !currentStatus;

        // Обновляем состояние в базе данных
        await pool.query(
            'UPDATE user_rooms SET is_ready = $1 WHERE room_id = $2 AND user_id = $3',
            [newStatus, roomId, userId]
        );

        res.sendStatus(200); // Успешно обновили состояние
    } catch (err) {
        console.error(err);
        res.sendStatus(500); // Если ошибка, отправляем 500
    }
};

exports.getReadyUsers = async (req, res) => {
    const { roomId } = req.query; // получаем roomId из query-параметра

    try {
        // Получаем список всех пользователей, которые готовы (is_ready = true) в данной комнате
        const result = await pool.query(
            'SELECT user_id FROM user_rooms WHERE room_id = $1 AND is_ready = true',
            [roomId]
        );

        // Возвращаем список ID пользователей
        res.json(result.rows.map(r => r.user_id));
    } catch (err) {
        console.error(err);
        res.sendStatus(500); // Если ошибка, отправляем 500
    }
};
exports.createRating = async (req, res) => {
    const { fromUserId, toUserId, roomId, rating, comment } = req.body;
    console.log("Received rating data:", { fromUserId, toUserId, roomId, rating, comment });
    // Валидация данных
    if (rating < 1 || rating > 5) {
        return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    try {
        // Вставка оценки в таблицу user_ratings
        const result = await pool.query(
            `INSERT INTO user_ratings (from_user_id, to_user_id, room_id, rating, comment)
            VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [fromUserId, toUserId, roomId, rating, comment]
        );

        res.status(201).json(result.rows[0]); // Отправляем назад созданную запись
    } catch (error) {
        console.error("Error adding rating:", error);
        res.status(500).json({ error: "Server error" });
    }
};

// Проверка, оставлял ли пользователь отзыв
exports.hasUserRated = async (req, res) => {
    const { fromUserId, toUserId, roomId } = req.query;

    try {
        const result = await pool.query(
            `SELECT 1 FROM user_ratings
             WHERE from_user_id = $1 AND to_user_id = $2 AND room_id = $3`,
            [fromUserId, toUserId, roomId]
        );

        const hasRated = result.rowCount > 0;
        res.json({ hasRated });
    } catch (error) {
        console.error("Error checking rating:", error);
        res.status(500).json({ error: "Server error" });
    }
};