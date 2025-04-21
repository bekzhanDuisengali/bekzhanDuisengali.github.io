const db = require('../db');

exports.addFavouriteTopic = async (req, res) => {
    const { user_id, topic_id } = req.body;

    try {
        await db.query(
            'INSERT INTO favourite_topics (user_id, topic_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
            [user_id, topic_id]
        );
        res.status(200).json({ message: 'Topic added to favourites' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getFavouriteTopics = async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await db.query(
            `SELECT t.id, t.name FROM favourite_topics f
             JOIN topics t ON f.topic_id = t.id
             WHERE f.user_id = $1`,
            [userId]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.removeFavouriteTopic = async (req, res) => {
    const { user_id, topic_id } = req.body;

    try {
        await db.query(
            'DELETE FROM favourite_topics WHERE user_id = $1 AND topic_id = $2',
            [user_id, topic_id]
        );
        res.status(200).json({ message: 'Topic removed from favourites' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
