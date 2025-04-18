require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const quizResultsRoute = require('./routes/quizResults');
const roomRoutes = require('./routes/rooms');
const app = express();
const topicsRoute = require('./routes/topics');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api/topics', topicsRoute);
app.use(express.json());
app.use('/api/rooms', roomRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', quizResultsRoute);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/', (req, res) => {
    res.send('Сервер работает!');
});