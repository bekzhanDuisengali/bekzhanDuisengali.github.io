const express = require('express');
const router = express.Router();
const pool = require('../db');

const { createRoom, getRoomUsers, getActiveRooms, closeRoom, joinRoom } = require('../controllers/roomController');

router.post('/create', createRoom);
router.post('/ready', async (req, res) => {
    const { roomId } = req.body;
    const userId = req.user.id;

    try {
        await pool.query(
            'UPDATE room_users SET is_ready = true WHERE room_id = $1 AND user_id = $2',
            [roomId, userId]
        );
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});
router.get('/ready-users', async (req, res) => {
    const { roomId } = req.query;

    try {
        const result = await pool.query(
            'SELECT user_id FROM room_users WHERE room_id = $1 AND is_ready = true',
            [roomId]
        );
        res.json(result.rows.map(r => r.user_id));
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

router.get('/room-users', getRoomUsers);

router.get('/active', getActiveRooms);
router.get('/close/:id', closeRoom);
router.get('/joinRoom', joinRoom);
module.exports = router;