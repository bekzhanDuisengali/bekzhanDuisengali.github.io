const pool = require('../db');
const bcrypt = require('bcrypt');
exports.getUserRating = async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await pool.query(
            'SELECT rating FROM users WHERE id = $1',
            [userId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ rating: result.rows[0].rating });
    } catch (err) {
        console.error("Ошибка при получении рейтинга:", err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
};

exports.getUserById = async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await pool.query(
            'SELECT id, username, email, rating FROM users WHERE id = $1',
            [userId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка при получении пользователя:", err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
};

exports.updateProfile = async (req, res) => {
    const { userId } = req.params;
    const { username, email } = req.body;
    if (!username && !email) {
        return res.status(400).json({error: 'Nothing to update'});
    }
    try {
        if (email) {
            const dup = await pool.query(
                'SELECT 1 FROM users WHERE email = $1 AND id <> $2',
                [email, userId]
            );
            if (dup.rowCount > 0) {
                return res.status(400).json({ error: 'Email already in use' });
            }
        }
        const fields = [];
        const values = [];
        let idx = 1;
        if (username) {
            fields.push(`username = $${idx++}`);
            values.push(username);
        }
        if (email) {
            fields.push(`email = $${idx++}`);
            values.push(email);
        }
        values.push(userId);
        const query = `
      UPDATE users
      SET ${fields.join(', ')}
      WHERE id = $${idx}
      RETURNING id, username, email, rating
    `;
        const result = await pool.query(query, values);

        res.json({ user: result.rows[0] });
    } catch (err) {
        console.error('Ошибка при обновлении профиля:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.changePassword = async (req, res) => {
    const { userId } = req.params;
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
        return res.status(400).json({ error: 'Both current and new passwords are required' });
    }

    try {
        const result = await pool.query(
            'SELECT password FROM users WHERE id = $1',
            [userId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(currentPassword, result.rows[0].password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Current password is incorrect' });
        }

        const hashed = await bcrypt.hash(newPassword, 10);
        await pool.query(
            'UPDATE users SET password = $1 WHERE id = $2',
            [hashed, userId]
        );

        res.json({ message: 'Password changed successfully' });
    } catch (err) {
        console.error('Ошибка при смене пароля:', err);
        res.status(500).json({ error: 'Server error' });
    }
};
