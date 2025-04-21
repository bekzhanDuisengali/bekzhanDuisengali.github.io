const express = require('express');
const router = express.Router();
const { createRoom, getRoomUsers, getActiveRooms, closeRoom, joinRoom } = require('../controllers/roomController');

router.post('/create', createRoom);

router.get('/room-users', getRoomUsers);

router.get('/active', getActiveRooms);
router.get('/close/:id', closeRoom);
router.get('/joinRoom', joinRoom);
module.exports = router;