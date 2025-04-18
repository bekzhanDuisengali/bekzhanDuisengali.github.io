const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/quiz-results', async (req, res) => {
    const { userId, language, score, level } = req.body;

    if (!userId || !language || score == null || !level) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const result = await pool.query(
            `INSERT INTO quiz_results (user_id, language, score, level)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [userId, language, score, level]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error saving quiz result:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;