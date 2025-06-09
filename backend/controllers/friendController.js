const pool = require('../db');

exports.getFriendshipStatus = async (req, res) => {
    const { user1, user2 } = req.query;

    if (!user1 || !user2) {
        return res.status(400).json({ message: "Both user1 and user2 are required" });
    }

    try {
        const result = await pool.query(
            `SELECT status FROM friendships 
             WHERE (requester_id = $1 AND addressee_id = $2)
                OR (requester_id = $2 AND addressee_id = $1)`,
            [user1, user2]
        );

        if (result.rows.length > 0) {
            return res.status(200).json({ status: result.rows[0].status });
        } else {
            return res.status(200).json({ status: 'none' });
        }
    } catch (error) {
        console.error('Error checking friendship status:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
// Отправить заявку в друзья
exports.sendFriendRequest = async (req, res) => {
    const { requesterId, addresseeId } = req.body;

    if (requesterId === addresseeId) {
        return res.status(400).json({ message: "Нельзя добавить самого себя в друзья." });
    }

    try {
        // Проверка: существует ли уже заявка (в любом направлении)
        const existing = await pool.query(
            `SELECT * FROM friendships
             WHERE (requester_id = $1 AND addressee_id = $2)
                OR (requester_id = $2 AND addressee_id = $1)`,
            [requesterId, addresseeId]
        );

        if (existing.rows.length > 0) {
            const status = existing.rows[0].status;

            if (status === 'pending') {
                return res.status(400).json({ message: 'Friend request already sent' });
            }

            if (status === 'accepted') {
                return res.status(400).json({ message: 'Already friends' });
            }

            if (status === 'rejected') {
                await pool.query(
                    `UPDATE friendships SET status = 'pending'
                     WHERE (requester_id = $1 AND addressee_id = $2)
                        OR (requester_id = $2 AND addressee_id = $1)`,
                                [requesterId, addresseeId]
                            );

                            return res.status(200).json({ message: 'Friend request re-sent' });
                        }
        }

        // Отправить новую заявку
        await pool.query(
            `INSERT INTO friendships (requester_id, addressee_id, status)
             VALUES ($1, $2, 'pending')`,
            [requesterId, addresseeId]
        );

        res.status(200).json({ message: 'Friend request sent' });

    } catch (error) {
        console.error('Error sending friend request:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
// Получить список друзей (принятые заявки)
exports.getFriends = async (req, res) => {
    const userId = req.params.userId;

    try {
        const result = await pool.query(
            `
            SELECT u.id, u.username, u.email FROM friendships f
            JOIN users u ON u.id = f.addressee_id
            WHERE f.requester_id = $1 AND f.status = 'accepted'
            UNION
            SELECT u.id, u.username, u.email FROM friendships f
            JOIN users u ON u.id = f.requester_id
            WHERE f.addressee_id = $1 AND f.status = 'accepted'
            `,
            [userId]
        );

        res.status(200).json({ friends: result.rows });
    } catch (error) {
        console.error('Error fetching friends:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Принять заявку
exports.acceptFriendRequest = async (req, res) => {
    const { requesterId, addresseeId } = req.body;

    try {
        await pool.query(
            `UPDATE friendships SET status = 'accepted' 
             WHERE requester_id = $1 AND addressee_id = $2`,
            [requesterId, addresseeId]
        );

        res.status(200).json({ message: 'Friend request accepted' });
    } catch (error) {
        console.error('Error accepting friend request:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
// GET /api/friends/:userId/requests
exports.getIncomingRequests = async (req, res) => {
    const userId = req.params.userId;

    try {
        const result = await pool.query(
            `SELECT u.id, u.username, u.email 
             FROM friendships f
             JOIN users u ON u.id = f.requester_id
             WHERE f.addressee_id = $1 AND f.status = 'pending'`,
            [userId]
        );

        res.status(200).json({ requests: result.rows });
    } catch (error) {
        console.error('Error fetching friend requests:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.getFriends = async (req, res) => {
    const userId = req.params.userId;
    try {
        const result = await pool.query(
            `SELECT u.id, u.username, u.email 
             FROM friendships f
             JOIN users u ON 
                (u.id = f.requester_id OR u.id = f.addressee_id) 
             WHERE (f.requester_id = $1 OR f.addressee_id = $1) 
               AND f.status = 'accepted' 
               AND u.id != $1`,
            [userId]
        );

        res.status(200).json({ friends: result.rows });
    } catch (error) {
        console.error('Error fetching friends:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
// POST /api/friends/reject
exports.rejectFriendRequest = async (req, res) => {
    const { requesterId, addresseeId } = req.body;

    try {
        await pool.query(
            `UPDATE friendships SET status = 'rejected' 
             WHERE requester_id = $1 AND addressee_id = $2`,
            [requesterId, addresseeId]
        );

        res.status(200).json({ message: 'Friend request rejected' });
    } catch (error) {
        console.error('Error rejecting friend request:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// DELETE /api/friends
exports.removeFriend = async (req, res) => {
    const { userId1, userId2 } = req.body;

    try {
        await pool.query(
            `DELETE FROM friendships
             WHERE (requester_id = $1 AND addressee_id = $2)
                OR (requester_id = $2 AND addressee_id = $1)`,
            [userId1, userId2]
        );

        res.status(200).json({ message: 'Friendship removed' });
    } catch (error) {
        console.error('Error removing friend:', error);
        res.status(500).json({ error: 'Server error' });
    }
};


