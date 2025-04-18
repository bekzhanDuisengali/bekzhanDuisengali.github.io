// routes/topics.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT id, name FROM topics');
        res.json(rows);
    } catch (err) {
        console.error('Ошибка чтения тем:', err);
        res.status(500).json({ error: 'Ошибка чтения тем' });
    }
});

module.exports = router;
