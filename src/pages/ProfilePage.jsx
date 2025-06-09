import React, {Component, useEffect, useState} from "react";
import "../styles/ProfilePage.css";
import avatar from "../assets/avatar.png";
import addFriendIcon from "../assets/addFriendIcon.png";
import achievement1 from "../assets/achievement1.jpg";
import achievement2 from "../assets/achievement2.jpg";
import achievement3 from "../assets/achievement3.jpg";
import globeYellowIcon from "../assets/globeYellow.png";
import RatingProgressChart from "../Components/RatingProgressChart";
import {useParams} from "react-router-dom";

// class ProfilePage extends Component {
//     render() {
//         return (
//             <div className="profile-container">
//                 <div className="profile-header">
//                     <div className="globe-icon">
//                         <img src={globeYellowIcon} alt="Globe Icon"/>
//                     </div>
//                     <div className="navigation">
//                         <a href="/room" className="select-rooms">Select Rooms</a>
//                         <button className="profile-button"><a href="/myprofile">Profile</a></button>
//                     </div>
//                 </div>
//
//                 <div className="profile-content">
//                     <div className="left-section">
//                         <div className="avatar-section">
//                             <div className="avatar">
//                                 <img src={avatar} alt="Profile"/>
//                                 <div className="rating">
//                                     <span className="rating-score">3.8</span>
//                                 </div>
//                             </div>
//                             <h2 className="name">Daniil</h2>
//                             {/*<button className="add-friend-button">*/}
//                             {/*    <img src={addFriendIcon} alt="Add Friend" />*/}
//                             {/*    Add Friend*/}
//                             {/*</button>*/}
//                         </div>
//
//                         <div className="favorite-topics">
//                             <h3>Favorite Topics:</h3>
//                             <p className="topic">Travel Adventures</p>
//                             <p className="topic">Movies & TV Shows</p>
//                             <p className="topic">Daily Life</p>
//                         </div>
//                     </div>
//
//                     <div className="right-section">
//                         <div className="languages">
//                             <h3>Languages:</h3>
//                             <p>English: <span className="intermediate">Intermediate</span></p>
//                             <p>Spanish: <span className="not-studied">not studied</span></p>
//                             <p>French: <span className="advanced">Advanced</span></p>
//                         </div>
//
//                         <div className="achievements">
//                             <h3>Achievements:</h3>
//                             <div className="achievement-icons">
//                                 <img src={achievement1} alt="Achievement 1" />
//                                 <img src={achievement2} alt="Achievement 2" />
//                                 <img src={achievement3} alt="Achievement 3" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="profile-footer">
//                     <p>Ready to start practicing? <a href="/room" className="join-room">Join a room now!</a></p>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default ProfilePage;



const ProfilePage = () => {
    const { id: userId } = useParams();  // Получаем id из URL
    const [userName, setUserName] = useState("User");
    const [avatarUrl] = useState(avatar);
    const [alreadyFriends, setAlreadyFriends] = useState(false);
    const [rating, setRating] = useState(0.0);
    const [languages, setLanguages] = useState([]);
    const [favouriteTopics, setFavouriteTopics] = useState([]);
    const [ratingHistory, setRatingHistory] = useState([]);
    const myUserId = localStorage.getItem("userId");
    const isOwnProfile = userId === myUserId;
    const [friends, setFriends] = useState([]);
    const [friendRequestSent, setFriendRequestSent] = useState(false);
    const [incomingRequests, setIncomingRequests] = useState([]);
    const handleAccept = (requesterId) => {
        fetch(`http://localhost:5001/api/friends/accept`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                requesterId,
                addresseeId: myUserId
            })
        })
            .then(() => {
                setIncomingRequests(prev => prev.filter(r => r.requester_id !== requesterId));
            });
    };

    const handleReject = (requesterId) => {
        fetch(`http://localhost:5001/api/friends/reject`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                requesterId,
                addresseeId: myUserId
            })
        })
            .then(() => {
                setIncomingRequests(prev => prev.filter(r => r.requester_id !== requesterId));
            });
    };
    useEffect(() => {
        if (!isOwnProfile && myUserId && userId) {
            fetch(`http://localhost:5001/api/friends/status?user1=${myUserId}&user2=${userId}`)
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'pending') {
                        setFriendRequestSent(true);
                        setAlreadyFriends(false);
                    } else if (data.status === 'accepted') {
                        setAlreadyFriends(true);
                    } else {
                        setFriendRequestSent(false);
                        setAlreadyFriends(false);
                    }
                })
                .catch(err => console.error('Ошибка при получении статуса дружбы:', err));
        }
    }, [myUserId, userId, isOwnProfile]);
    useEffect(() => {
        if (userId) {
            fetch(`http://localhost:5001/api/friends/${userId}/friends`)
                .then(res => res.json())
                .then(data => {
                    if (data.friends) setFriends(data.friends);
                })
                .catch(err => console.error("Ошибка при получении списка друзей:", err));
        }
    }, [userId]);

    useEffect(() => {
        if (isOwnProfile) {
            fetch(`http://localhost:5001/api/friends/${myUserId}/requests`)
                .then(res => res.json())
                .then(data => {
                    setIncomingRequests(data.requests);
                })
                .catch(err => console.error("Ошибка при загрузке заявок:", err));
        }
    }, [myUserId, isOwnProfile]);

    useEffect(() => {
        if (!userId) {
            console.warn("User ID не указан в URL");
            return;
        }

        fetch(`http://localhost:5001/api/users/${userId}`)
            .then(res => res.json())
            .then(data => setUserName(data.username || "User"))
            .catch(err => console.error("Ошибка при получении профиля:", err));

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
    const handleAddFriend = () => {
        fetch(`http://localhost:5001/api/friends/request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                requesterId: myUserId,
                addresseeId: userId
            })
        })
            .then(res => {
                if (res.ok) {
                    setFriendRequestSent(true);
                } else {
                    return res.json().then(data => {
                        console.error("Ошибка при отправке заявки:", data.message);
                    });
                }
            })
            .catch(err => console.error("Ошибка при отправке запроса:", err));
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
                    {/* Для чужого профиля кнопку редактирования можно убрать или сделать условной */}
                </div>
            </div>

            <div className="profile-content">
                <div className="left-section">
                    <div className={`avatar-section ${isOwnProfile ? "own-profile" : "other-profile"}`}>
                        <div className="avatar">
                            <img src={avatarUrl} alt="Profile" />
                            <div className="rating">
                                <span className="rating-score">
                                    {typeof rating === "number" ? rating.toFixed(1) : "—"}
                                </span>
                            </div>
                        </div>
                        <h2 className="name">{userName}</h2>
                        {isOwnProfile && incomingRequests.length > 0 && (
                            <div className="incoming-requests">
                                <h3>Incoming Friend Requests:</h3>
                                <ul>
                                    {incomingRequests.map(req => (
                                        <li key={req.requester_id}>
                                            {req.username}
                                            <button onClick={() => handleAccept(req.requester_id)}>Accept</button>
                                            <button onClick={() => handleReject(req.requester_id)}>Reject</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {!isOwnProfile && !alreadyFriends && (
                            <button
                                className="add-friend-button"
                                onClick={handleAddFriend}
                                disabled={friendRequestSent}
                            >
                                <img src={addFriendIcon} alt="Add Friend" />
                                {friendRequestSent ? "Request Sent" : "Add Friend"}
                            </button>
                        )}
                        {!isOwnProfile && alreadyFriends && (
                            <p className="already-friends-label">You are already friends</p>
                        )}
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

export default ProfilePage;