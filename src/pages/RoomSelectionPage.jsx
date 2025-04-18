import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RoomSelectionPage.css";
import travelIcon from "../assets/travel.png";
import dailyLifeIcon from "../assets/daily-life.png";
import foodIcon from "../assets/food.png";
import techIcon from "../assets/technology.png";
import moviesIcon from "../assets/movies.png";
import musicIcon from "../assets/music.png";
import sportsIcon from "../assets/sports.png";
import scienceIcon from "../assets/science.png";
import languageIcon from "../assets/language.png";
import businessIcon from "../assets/business.png";
import dotIcon from "../assets/dot.png";

const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log("Decoded token payload:", payload);
        return payload.userId;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
};


const RoomSelectionPage = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [topicFilters, setTopicFilters] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);
    const handleLevelChange = (e) => setSelectedLevel(e.target.value);
    const handleTopicChange = (e) => setSelectedTopicId(e.target.value);

    const [selectedTopicId, setSelectedTopicId] = useState("");
    const [rooms] = useState([
        { id: 1, language: "English", topic: "Travel Adventures", filter: "Travel Adventures", participants: "1/2" },
        { id: 2, language: "Spanish", topic: "Sports & Fitness", filter: "Sports & Fitness", participants: "2/4" },
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5001/api/topics")
            .then(res => res.json())
            .then(data => setTopicFilters(data))
            .catch(err => console.error("Ошибка загрузки тем:", err));
    }, []);

    const handleFilterSelect = (filter) => {
        setSelectedFilter(prev => (prev === filter ? null : filter));
    };

    const handleCreateRoom = async () => {
        const language = selectedLanguage;
        const level = selectedLevel;
        const userId = getUserIdFromToken();
        console.log("User ID:", userId);

        if (!selectedTopicId || language === "" || level === "" || !userId) {
            alert("Please select all fields before creating a room.");
            return;
        }

        const topicName = topicFilters.find(t => t.id.toString() === selectedTopicId)?.name || "Unknown Topic";
        const roomName = `Room ${topicName} (${language})`;
        const roomId = crypto.randomUUID();

        try {
            await fetch("http://localhost:5001/api/rooms/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    topic_id: selectedTopicId,
                    name: roomName,
                    room_id: roomId,
                    language: selectedLanguage,
                    level: selectedLevel,
                    user_id: userId
                }),
            });

            navigate("/roompage", {
                state: {
                    topic: topicName,
                    language: selectedLanguage,
                    level: selectedLevel,
                    roomId
                }
            });
        } catch (err) {
            console.error("Ошибка при создании комнаты:", err.message);
        }
    };

    const filters = [
        { id: 1, name: "Travel Adventures", icon: travelIcon },
        { id: 2, name: "Daily Life", icon: dailyLifeIcon },
        { id: 3, name: "Food & Cooking", icon: foodIcon },
        { id: 4, name: "Technology & Innovation", icon: techIcon },
        { id: 5, name: "Movies & TV Shows", icon: moviesIcon },
        { id: 6, name: "Music & Arts", icon: musicIcon },
        { id: 7, name: "Sports & Fitness", icon: sportsIcon },
        { id: 8, name: "Science & Nature", icon: scienceIcon },
        { id: 9, name: "Language Learning", icon: languageIcon },
        { id: 10, name: "Business & Career", icon: businessIcon },
    ];

    const filteredRooms = selectedFilter
        ? rooms.filter((room) => room.topic === selectedFilter)
        : rooms;

    return (
        <div className="room-selection-page">
            <header className="room-header">
                <nav className="navbar-room">
                    <img src={dotIcon} alt="dot" className="dot-icon"/>
                    <button className="logout-room">Log Out</button>
                </nav>
                <h1>Select a Room to Join</h1>
                <p>Choose a topic for conversation</p>
            </header>

            <div className="room-content">
                <div className="room-create-section">
                    <h2>Don't see a room that fits?</h2>
                    <p>Create your own!</p>
                    <div className="room-create-form">
                        <select className="dropdown" onChange={handleTopicChange}>
                            <option value="">Topic</option>
                            {topicFilters.map((topic) => (
                                <option key={topic.id} value={topic.id}>{topic.name}</option>
                            ))}
                        </select>


                        <select className="dropdown" value={selectedLanguage} onChange={handleLanguageChange}>
                            <option value="">Language</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                        </select>

                        <select className="dropdown" value={selectedLevel} onChange={handleLevelChange}>
                            <option value="">Level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>

                        <button className="create-room-btn" onClick={handleCreateRoom}>Create Room</button>
                    </div>
                </div>

                <div className="room-display">
                    <h3>Available Rooms</h3>
                    <ul className="room-list">
                        {filteredRooms.map((room) => (
                            <li key={room.id} className="room-item">
                                <span className="room-language">{room.language}</span>
                                <span className="room-topic">{room.topic}</span>
                                <span className="room-participants">{room.participants}</span>
                            </li>
                        ))}
                    </ul>
                    {!filteredRooms.length && <p>No rooms available for this filter.</p>}
                </div>

                <div className="filters-section">
                    <h2>Filters</h2>
                    <div className="filters-container">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                className={`filter-btn ${selectedFilter === filter.name ? "selected" : ""}`}
                                onClick={() => handleFilterSelect(filter.name)}
                            >
                                <img src={filter.icon} alt={filter.name} className="filter-icon" />
                                <span className="filter-name">{filter.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomSelectionPage;
