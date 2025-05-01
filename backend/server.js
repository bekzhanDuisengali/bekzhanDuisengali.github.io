require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const authRoutes = require('./routes/auth');
const quizResultsRoute = require('./routes/quizResults');
const roomRoutes = require('./routes/rooms');
const topicsRoute = require('./routes/topics');
const userRoutes = require('./routes/user');
const favouriteTopicsRoutes = require('./routes/favouriteTopics');

const app = express();
const server = http.createServer(app);

const roomsReadyStatus = {};

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
});

io.on('connection', socket => {
    console.log('Новый пользователь подключён:', socket.id);

    socket.on('joinRoom', ({ roomId, user }) => {
        if (!roomId || !user || !user.id) {
            console.warn('joinRoom: некорректные данные', roomId, user);
            return;
        }
        socket.join(roomId);

        if (!roomsReadyStatus[roomId]) {
            roomsReadyStatus[roomId] = { users: [], readyUsers: [] };
        }
        if (!roomsReadyStatus[roomId].users.find(u => u.id === user.id)) {
            roomsReadyStatus[roomId].users.push(user);
        }

        io.to(roomId).emit('usersUpdated', roomsReadyStatus[roomId].users);
    });

    socket.on('ready', ({ roomId, user }) => {
        const room = roomsReadyStatus[roomId];
        if (!room) return;

        if (!room.readyUsers.find(u => u.id === user.id)) {
            room.readyUsers.push(user);
        }

        if (room.readyUsers.length === room.users.length) {
            let countdown = 3;
            const scenario = {
                title: 'Пример сценария',
                content: 'Обсудите плюсы и минусы жизни в большом городе',
                level: 'B1',
                topic: 'город'
            };

            const timer = setInterval(() => {
                io.to(roomId).emit('countdown', { countdown });
                countdown--;
                if (countdown < 0) {
                    clearInterval(timer);
                    io.to(roomId).emit('gameStarting', { scenario });
                    // первый ход за первым в массиве users
                    io.to(roomId).emit('startTurn', { user: room.users[0] });
                }
            }, 1000);
        }
    });

    socket.on('disconnect', () => {
        console.log('Пользователь отключился:', socket.id);
    });
});

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/topics', topicsRoute);
app.use('/api/users', userRoutes);
app.use('/api/favourites', favouriteTopicsRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api', quizResultsRoute);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Сервер и Socket.IO слушают порт ${PORT}`);
});
