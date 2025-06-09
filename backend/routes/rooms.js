const express = require('express');
const router = express.Router();
const pool = require('../db');
const authMiddleware = require('../middleware/authMiddleware');
const {
    createRoom,
    getRoomUsers,
    getActiveRooms,
    joinRoom,
    closeRoomCompletely,
    getReadyUsers,
    setUserReady,
    createRating,
    hasUserRated,
    leaveRoom
} = require('../controllers/roomController');
// Создание комнаты
router.post('/create', createRoom);

// Присоединение к комнате
router.post('/joinRoom', joinRoom);

// Получение пользователей комнаты
router.get('/room-users', getRoomUsers);

// Обновление флага is_ready
router.post('/ready',setUserReady);

// Получение пользователей с is_ready = true
router.get('/ready-users', getReadyUsers);

// Новый маршрут выхода из комнаты
router.post('/leave', leaveRoom);

// Получение активных комнат
router.get('/active', getActiveRooms);


// Полное закрытие комнаты
router.get('/close-completely/:id', closeRoomCompletely);

router.post('/rate', createRating);

router.get('/has-rated', hasUserRated);


module.exports = router;