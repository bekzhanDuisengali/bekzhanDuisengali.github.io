const express = require('express');
const router = express.Router();
const { createRoom, getRoomUsers } = require('../controllers/roomController');

router.post('/create', createRoom);

router.get('/room-users', getRoomUsers);

module.exports = router;