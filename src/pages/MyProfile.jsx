import React, { useEffect, useState } from "react";
import "../styles/MyProfile.css";
import globeYellowIcon from "../assets/globeYellow.png";
import defaultAvatar from "../assets/avatar.png";
import achievement1 from "../assets/achievement1.jpg";
import achievement2 from "../assets/achievement2.jpg";
import achievement3 from "../assets/achievement3.jpg";
import RatingProgressChart from "../Components/RatingProgressChart";
import avatar from "../assets/avatar.png";

const MyProfile = () => {
    const [userName, setUserName] = useState("User");
    const [avatarUrl] = useState(defaultAvatar);
    const [rating, setRating] = useState(0.0);
    const [languages, setLanguages] = useState([]);
    const [favouriteTopics, setFavouriteTopics] = useState([]);
    const [ratingHistory, setRatingHistory] = useState([]);
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (!userId) {
            console.warn("User ID не найден в localStorage.");
            return;
        }

        fetch(`http://localhost:5001/api/users/${userId}`)
            .then(res => res.json())
            .then(data => setUserName(data.username || "User"))
            .catch(err => console.error("Ошибка при получении профиля:", err));

        fetch(`http://localhost:5001/api/friends/${userId}/friends`)
            .then(res => res.json())
            .then(data => setFriends(data.friends))
            .catch(err => console.error("Ошибка при получении друзей:", err));

        fetch(`http://localhost:5001/api/friends/${userId}/requests`)
            .then(res => res.json())
            .then(data => setFriendRequests(data.requests))
            .catch(err => console.error("Ошибка при получении заявок в друзья:", err));

        fetch(`http://localhost:5001/api/users/${userId}/average-rating`)
            .then(res => res.json())
            .then(data => {
                if (data.averageRating !== null) {
                    setRating(parseFloat(data.averageRating));
                } else {
                    setRating(0.0);
                }
            })
            .catch(err => console.error("Ошибка при получении рейтинга:", err));

        fetch(`http://localhost:5001/api/users/${userId}/rating-history`)
            .then(res => res.json())
            .then(data => setRatingHistory(data))
            .catch(err => console.error("Ошибка при получении истории рейтингов:", err));

        fetch(`http://localhost:5001/api/quiz-results/${userId}`)
            .then(res => res.json())
            .then(data => setLanguages(data))
            .catch(err => console.error("Ошибка при получении языков:", err));

        fetch(`http://localhost:5001/api/favourites/${userId}`)
            .then(res => res.json())
            .then(data => setFavouriteTopics(data.map(t => t.name)))
            .catch(err => console.error("Ошибка при получении избранных тем:", err));
    }, [userId]);

    const handleAccept = (requestId) => {
        const acceptedFriend = friendRequests.find(r => r.id === requestId);

        fetch(`http://localhost:5001/api/friends/accept`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ requesterId: requestId, addresseeId: userId }),
        })
            .then(res => res.json())
            .then(() => {
                if (acceptedFriend) {
                    setFriendRequests(prev => prev.filter(r => r.id !== requestId));
                    setFriends(prev => [...prev, acceptedFriend]);
                }
            })
            .catch(err => console.error("Ошибка при принятии заявки:", err));
    };

    const handleReject = (requestId) => {
        fetch(`http://localhost:5001/api/friends/reject`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ senderId: requestId, receiverId: userId }),
        })
            .then(res => res.json())
            .then(() => {
                setFriendRequests(prev => prev.filter(r => r.id !== requestId));
            })
            .catch(err => console.error("Ошибка при отклонении запроса:", err));
    };

    const handleRemoveFriend = (friendId) => {
        fetch(`http://localhost:5001/api/friends/remove`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, friendId }),
        })
            .then(res => res.json())
            .then(() => {
                setFriends(prev => prev.filter(f => f.id !== friendId));
            })
            .catch(err => console.error("Ошибка при удалении друга:", err));
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="globe-icon">
                    <a href="/">
                        <img src={globeYellowIcon} alt="Globe Icon" />
                    </a>
                </div>
                <div className="navigation">
                    <a href="/room" className="select-rooms">Select Rooms</a>
                    <button className="edit-button"><a href="/edit">Edit</a></button>
                </div>
            </div>

            <div className="profile-content">
                <div className="left-section">
                    <div className="avatar-section-mine">
                        <div className="avatar">
                            <img src={avatarUrl} alt="Profile" />
                            <div className="rating">
                                <span className="rating-score">
                                    {typeof rating === "number" ? rating.toFixed(1) : "—"}
                                </span>
                            </div>
                        </div>
                        <h2 className="name">{userName}</h2>
                    </div>

                    <div className="favorite-topics">
                        <h3>Favorite Topics:</h3>
                        {favouriteTopics.length > 0 ? (
                            favouriteTopics.map((topic, i) => (
                                <p key={i} className="topic">{topic}</p>
                            ))
                        ) : (
                            <p>No favourite topics yet</p>
                        )}
                    </div>
                    <div className="friends-list">
                        <h3>Friends:</h3>
                        {friends.length > 0 ? (
                            <ul className="friends-grid">
                                {friends.map(friend => (
                                    <li key={friend.id} className="friend-card">
                                        <a href={`/profile/${friend.id}`} className="friend-link">
                                            <img src={avatar} alt="Friend Avatar" className="friend-avatar" />
                                            <span className="friend-username">{friend.username}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No friends yet.</p>
                        )}
                    </div>
                </div>

                <div className="right-section">
                    <div className="languages">
                        <h3>Languages:</h3>
                        {languages.length > 0 ? (
                            languages.map((lang, i) => (
                                <p key={i}>
                                    {lang.language}: <span className={lang.level.toLowerCase()}>{lang.level}</span>
                                </p>
                            ))
                        ) : (
                            <p>No language data available</p>
                        )}
                    </div>

                    <div className="achievements">
                        <h3>Achievements:</h3>
                        <div className="achievement-icons">
                            <img src={achievement1} alt="Achievement 1" />
                            <img src={achievement2} alt="Achievement 2" />
                            <img src={achievement3} alt="Achievement 3" />
                        </div>
                    </div>



                    <div className="friend-requests-section">
                        <h3>Friend Requests:</h3>
                        {friendRequests.length > 0 ? (
                            friendRequests.map((request, i) => (
                                <div key={i} className="friend-request-item">
                                    <span>{request.username}</span>
                                    <button onClick={() => handleAccept(request.id)}>Accept</button>
                                    <button onClick={() => handleReject(request.id)}>Reject</button>
                                </div>
                            ))
                        ) : (
                            <p>No incoming friend requests</p>
                        )}
                    </div>

                    {ratingHistory.length > 0 && (
                        <div className="rating-chart-container">
                            <RatingProgressChart ratings={ratingHistory} />
                        </div>
                    )}
                </div>
            </div>

            <div className="profile-footer">
                <p>Ready to start practicing? <a href="/room" className="join-room">Join a room now!</a></p>
                <p className="take-test-prompt">
                    Want to improve your skills? <a href="/test" className="take-test-link">Take a Test</a>
                </p>
            </div>
        </div>
    );
};

export default MyProfile;