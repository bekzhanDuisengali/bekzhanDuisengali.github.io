require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const allScenarios = require('../src/Components/scenarios');
const { rooms } = require('./socket/room');
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
});

io.on('connection', socket => {
    console.log('Новый пользователь подключён:', socket.id);
    socket.onAny((event, ...args) => {
        console.log(`Сервер получил событие: ${event}`, args);
    });
    socket.on('joinRoom', ({ roomId, userId, username, level, topic }) => {
        console.log('joinRoom received', { roomId, userId, username, level, topic });

        if (!roomId || !userId || !username) {
            console.warn('joinRoom: некорректные данные', roomId, userId, username);
            return;
        }

        socket.join(roomId);
        socket.data.roomId = roomId;
        socket.data.user = { id: userId, username, topic };
        console.log(`Пользователь ${username} присоединился к комнате ${roomId}`);
        console.log(`Тема комнаты: ${topic}`);

        if (!rooms[roomId]) {
            rooms[roomId] = { users: [], readyUsers: [], level: level, topic: topic };
        }

        const room = rooms[roomId];
        if (!room.users) {
            room.users = [];
        }
        if (!room.users.find(u => u.id === userId)) {
            room.users.push({ id: userId, username, isReady: false });
        }
        if (!room.users.find(u => u.id === userId)) {
            room.users.push({ id: userId, username, isReady: false });
        }

        io.to(roomId).emit('usersUpdated', room.users);
    });
    let turnTimers = {}; // Храним таймеры по roomId

    function startSession(roomId) {
        const room = rooms[roomId];
        if (!room || !room.readyUsers || room.readyUsers.length === 0) return;
        console.log(`🔄 Старт сессии в комнате ${roomId} для пользователей:`, room.readyUsers);

        const speakers = [...room.readyUsers];
        let index = 0;


        function nextTurn() {
            if (index >= speakers.length) {
                console.log(`✅ Сессия завершена в комнате ${roomId}`);
                io.to(roomId).emit("sessionFinished");
                return;
            }

            const currentUser = speakers[index];
            io.to(roomId).emit("startTurn", { user: currentUser });

            // ⏳ Через 60 секунд — следующий
            setTimeout(() => {
                index++;
                nextTurn(); // вызов следующего
            }, 60000); // 60 * 1000
        }

        nextTurn(); // запуск первой итерации
    }

    // вызывать после того, как все готовы
    socket.on("startGame", ({ roomId }) => {
        console.log('игра вызвалась')
        startSession(roomId);
    });
    socket.on('ready', ({ roomId, user, isReady }) => {
        const room = rooms[roomId];
        if (!room || !room.users ||!user) return;

        // Обновляем isReady у пользователя в room.users
        const userInRoom = room.users.find(u => u.id === user.id);
        if (userInRoom) {
            userInRoom.isReady = isReady;
        }

        // Добавляем/удаляем из readyUsers
        if (isReady) {
            if (!room.readyUsers.find(u => u.id === user.id)) {
                room.readyUsers.push(user);
            }
        } else {
            room.readyUsers = room.readyUsers.filter(u => u.id !== user.id);
        }

        io.to(roomId).emit('usersUpdated', room.users);

        // Если все готовы, запускаем сценарий
        if (room.readyUsers.length === room.users.length) {
            let countdown = 3;
            const scenario = getRandomScenario();

            function getRandomScenario() {
                // first filter categories by both level AND topic
                const matchingCategories = allScenarios.filter(cat =>
                    cat.level === room.level &&
                    cat.topic === room.topic       // ← add this line
                );
                if (!matchingCategories.length) return null;

                const randomCategory =
                    matchingCategories[
                        Math.floor(Math.random() * matchingCategories.length)
                        ];
                const randomScenario =
                    randomCategory.scenarios[
                        Math.floor(Math.random() * randomCategory.scenarios.length)
                        ];
                const randomContent =
                    randomScenario.content[
                        Math.floor(Math.random() * randomScenario.content.length)
                        ];

                return {
                    title: randomScenario.title,
                    content: [randomContent],
                    level: randomCategory.level,
                    topic: randomCategory.topic
                };
            }
            if (!scenario) {
                console.warn("Не удалось выбрать сценарий.");
                return;
            }

            const timer = setInterval(() => {
                io.to(roomId).emit('countdown', { countdown });
                countdown--;
                if (countdown < 0) {
                    clearInterval(timer);
                    io.to(roomId).emit('gameStarting', { scenario });
                    startSession(roomId);
                }
            }, 1000);
        }
    });
    socket.on("gameEnded", ({ roomId }) => {
        io.to(roomId).emit("gameEnded");
        console.log(`Игра в комнате ${roomId} завершена`);

    });

    socket.on('disconnect', () => {
        const { roomId, user } = socket.data;
        console.log('Пользователь отключился:', socket.id);
        if (roomId && user && rooms[roomId]) {
            const room = rooms[roomId];

            room.users = room.users.filter(u => u.id !== user.id);
            if (Array.isArray(room.readyUsers)) {
                room.readyUsers = room.readyUsers.filter(u => u.id !== user.id);
            }
            io.to(roomId).emit('usersUpdated', room.users);

            if (room.users.length === 0) {
                delete rooms[roomId];
            }
        }

    });
});

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

const authRoutes = require('./routes/auth');
const quizResultsRoute = require('./routes/quizResults');
const roomRoutes = require('./routes/rooms');
const topicsRoute = require('./routes/topics');
const userRoutes = require('./routes/user');
const favouriteTopicsRoutes = require('./routes/favouriteTopics');
const friendRoutes = require('./routes/friend');

// const getReadyUsersByRoomId = (roomId) => {
//     const room = rooms[roomId];
//     return room ? room.readyUsers : [];
// };
app.use('/api/auth', authRoutes);
app.use('/api/friends', friendRoutes);
app.use('/api/topics', topicsRoute);
app.use('/api/users', userRoutes);
app.use('/api/favourites', favouriteTopicsRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api', quizResultsRoute);
// app.get("/api/rooms/ready-users", (req, res) => {
//     const roomId = req.query.roomId;
//     // Получение списка готовых пользователей для данной комнаты
//     const readyUsers = getReadyUsersByRoomId(roomId); // Примерная логика
//     res.json(readyUsers);
// });
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Сервер и Socket.IO слушают порт ${PORT}`);
});