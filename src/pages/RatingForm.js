import React, { useEffect, useState } from 'react';
import '../styles/RatingForm.css';
import avatar from '../assets/avatar.png';

const RatingForm = ({ fromUserId, roomUsers, roomId, onClose }) => {
    const [ratings, setRatings] = useState({});
    const [comments, setComments] = useState({});
    const [hoveredRatings, setHoveredRatings] = useState({});
    const [alreadyRatedUsers, setAlreadyRatedUsers] = useState({});

    useEffect(() => {
        const checkIfRated = async () => {
            const ratedMap = {};
            for (const user of roomUsers) {
                if (!user?._id || !fromUserId || !roomId || user._id === fromUserId) continue;

                try {
                    console.log("Checking rating for:", {
                        fromUserId,
                        toUserId: user._id,
                        roomId
                    });
                    const res = await fetch(
                        `http://localhost:5001/api/rooms/has-rated?fromUserId=${fromUserId}&toUserId=${user._id}&roomId=${roomId}`
                    );
                    const data = await res.json();
                    ratedMap[user._id] = data.hasRated;
                } catch (error) {
                    console.error("Ошибка при проверке оценки:", error);
                }
            }
            setAlreadyRatedUsers(ratedMap);
        };

        checkIfRated();
    }, [roomUsers, fromUserId, roomId]);

    const handleRatingChange = (userId, value) => {
        setRatings(prev => ({ ...prev, [userId]: value }));
    };

    const handleCommentChange = (userId, text) => {
        setComments(prev => ({ ...prev, [userId]: text }));
    };

    const renderStars = (userId) => {
        const currentRating = ratings[userId] || 0;
        const currentHovered = hoveredRatings[userId] ?? currentRating;

        return (
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={`${userId}-${star}`}
                        className={star <= currentRating ? 'selected' : ''}
                        style={{
                            color: star <= currentHovered ? 'gold' : 'gray',
                            cursor: 'pointer',
                            fontSize: '20px'
                        }}
                        onClick={() => handleRatingChange(userId, star)}
                        onMouseEnter={() =>
                            setHoveredRatings(prev => ({ ...prev, [userId]: star }))
                        }
                        onMouseLeave={() =>
                            setHoveredRatings(prev => ({ ...prev, [userId]: null }))
                        }
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            for (const user of roomUsers) {
                if (user._id === fromUserId) continue;

                const rating = ratings[user._id];
                if (!rating || rating < 1 || rating > 5) continue;

                const comment = comments[user._id] || "";

                console.log("Отправка рейтинга:", {
                    fromUserId,
                    toUserId: user._id,
                    roomId,
                    rating,
                    comment
                });

                await fetch('http://localhost:5001/api/rooms/rate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fromUserId,
                        toUserId: user.id,
                        roomId,
                        rating,
                        comment
                    })
                });
            }

            alert('Все оценки отправлены!');
            onClose();
        } catch (err) {
            console.error(err);
            alert('Ошибка при отправке рейтинга');
        }
    };
    console.log("roomUsers:", roomUsers);
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Оцените участников комнаты</h3>
                <form onSubmit={handleSubmit}>
                    {roomUsers
                        .filter(user => user._id !== fromUserId)
                        .map(user => {
                            const hasRated = alreadyRatedUsers[user._id];

                            return (
                                <div key={user._id} className="user-rating">
                                    <img src={avatar} alt="avatar" className='avatar-rating' />
                                    <p><strong>{user.name || user.username || 'Участник'}</strong></p>
                                    {hasRated ? (
                                        <p style={{ color: 'green' }}>Вы уже оценили этого пользователя</p>
                                    ) : (
                                        <>
                                            {renderStars(user._id)}
                                            <textarea
                                                placeholder="Комментарий (необязательно)"
                                                value={comments[user._id] || ''}
                                                onChange={(e) => handleCommentChange(user._id, e.target.value)}
                                            />
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    <button type="submit" className='submit-rating'>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default RatingForm;