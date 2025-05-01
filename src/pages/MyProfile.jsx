import React, { useEffect, useState } from "react";
import "../styles/MyProfile.css";
import globeYellowIcon from "../assets/globeYellow.png";
import defaultAvatar from "../assets/avatar.png";
import achievement1 from "../assets/achievement1.jpg";
import achievement2 from "../assets/achievement2.jpg";
import achievement3 from "../assets/achievement3.jpg";

const MyProfile = () => {
    const [userName, setUserName] = useState("User");
    const [avatarUrl] = useState(defaultAvatar);
    const [rating, setRating] = useState(0.0);
    const [languages, setLanguages] = useState([]);
    const [favouriteTopics, setFavouriteTopics] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            console.warn("User ID не найден в localStorage.");
            return;
        }

        fetch(`http://localhost:5001/api/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUserName(data.username || "User");
                setRating(data.rating ? parseFloat(data.rating) : 0.0);
            })
            .catch(err => console.error("Ошибка при получении профиля:", err));

        fetch(`http://localhost:5001/api/quiz-results/${userId}`)
            .then(res => res.json())
            .then(data => setLanguages(data))
            .catch(err => console.error("Ошибка при получении языков:", err));
        fetch(`http://localhost:5001/api/favourites/${userId}`)
            .then(res => res.json())
            .then(data => setFavouriteTopics(data.map(t => t.name)))
            .catch(err => console.error("Ошибка при получении избранных тем:", err));

    }, []);

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
                    <div className="avatar-section">
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
