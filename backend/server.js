require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const quizResultsRoute = require('./routes/quizResults');
const roomRoutes = require('./routes/rooms');
const topicsRoute = require('./routes/topics');
const userRoutes = require('./routes/user');
const favouriteTopicsRoutes = require('./routes/favouriteTopics');


const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(express.json());

app.use('/api/favourites', favouriteTopicsRoutes);
app.use('/api/topics', topicsRoute);
app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', quizResultsRoute);



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/', (req, res) => {
    res.send('Сервер работает!');
});