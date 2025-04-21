import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
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
import globeIcon from "../assets/globe.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
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

    const [favouriteTopicIds, setFavouriteTopicIds] = useState([]);


    const [selectedCapacity, setSelectedCapacity] = useState("");
    const [userId, setUserId] = useState(null);

    const [rooms, setRooms] = useState([]);
    const [selectedTopicId, setSelectedTopicId] = useState("");

    const navigate = useNavigate();

    const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);
    const handleLevelChange = (e) => setSelectedLevel(e.target.value);
    const handleTopicChange = (e) => setSelectedTopicId(e.target.value);
    const handleCapacityChange = (e) => setSelectedCapacity(e.target.value);


    useEffect(() => {
        const id = getUserIdFromToken();
        setUserId(id);
    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/topics`)
            .then(res => res.json())
            .then(setTopicFilters)
            .catch(err => console.error("Ошибка загрузки тем:", err));
    }, []);

    const handleFilterSelect = (filter) => {
        setSelectedFilter(prev => (prev === filter ? null : filter));
    };
    useEffect(() => {
        const fetchActiveRooms = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/rooms/active`);
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                setRooms(data);
            } catch (err) {
                console.error("Ошибка при загрузке активных комнат:", err);
            }
        };

        const interval = setInterval(fetchActiveRooms, 5000);
        fetchActiveRooms();

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchFavourites = async () => {
            if (!userId) return;

            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/favourites/${userId}`);
                const data = await res.json();
                const ids = data.map(topic => topic.id);
                setFavouriteTopicIds(ids);
            } catch (err) {
                console.error("Ошибка при загрузке избранных тем:", err);
            }
        };

        fetchFavourites();
    }, [userId]);

    const toggleFavourite = async (topicId) => {
        if (!userId) {
            alert("You must be logged in");
            return;
        }

        const isFav = favouriteTopicIds.includes(topicId);

        try {
            if (isFav) {
                await fetch(`${process.env.REACT_APP_API_URL}/api/favourites`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ user_id: userId, topic_id: topicId }),
                });
                setFavouriteTopicIds(prev => prev.filter(id => id !== topicId));
            } else {
                await fetch(`${process.env.REACT_APP_API_URL}/api/favourites`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ user_id: userId, topic_id: topicId }),
                });
                setFavouriteTopicIds(prev => [...prev, topicId]);
            }
        } catch (err) {
            console.error("Ошибка при переключении избранного:", err);
        }
    };



    const handleJoinRoom = async (roomId, topic, language, level) => {
        const userId = getUserIdFromToken();

        if (!userId) {
            alert("You must be logged in to join a room.");
            return;
        }

        try {
            await fetch(`${process.env.REACT_APP_API_URL}/api/rooms/join`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ room_id: roomId, user_id: userId }),
            });

            navigate("/roompage", {
                state: {
                    roomId,
                    topic,
                    language,
                    level,

                },
            });
        } catch (error) {
            console.error("Ошибка при присоединении к комнате:", error);
        }
    };

    const handleCreateRoom = async () => {
        const language = selectedLanguage;
        const level = selectedLevel;
        const userId = getUserIdFromToken();
        console.log("User ID:", userId);
        if (!selectedTopicId || language === "" || level === "" || !selectedCapacity || !userId) {
            alert("Please select all fields before creating a room.");
            return;
        }

        const topicName = topicFilters.find(t => t.id.toString() === selectedTopicId)?.name || "Unknown Topic";
        const roomName = `Room ${topicName} (${language})`;
        const roomId = crypto.randomUUID();

        try {
            await fetch(`${process.env.REACT_APP_API_URL}/api/rooms/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    topic_id: selectedTopicId,
                    name: roomName,
                    room_id: roomId,
                    language: selectedLanguage,
                    level: selectedLevel,
                    capacity: parseInt(selectedCapacity),
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
    const getTopicUUIDByName = (name) => {
        const topic = topicFilters.find((t) => t.name === name);
        return topic?.id;
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
                    <nav className="navbar-room">
                        <a href="/">
                            <img src={globeIcon} alt="dot" className="dot-icon" />
                        </a>
                        <a href="/myprofile">
                            <button className="logout-room">Profile</button>
                        </a>
                    </nav>
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

                        <select className="dropdown" value={selectedCapacity} onChange={handleCapacityChange}>
                            <option value="">Users</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>

                        <button className="create-room-btn" onClick={handleCreateRoom}>Create Room</button>
                    </div>
                </div>

                <div className="room-display">
                    <h3>Available Rooms</h3>
                    <ul className="room-list">
                        {filteredRooms.length > 0 ? (
                            filteredRooms.map((room) => (
                                <li key={room.id} className="room-item">
                                    <span className="room-language">{room.language}</span>
                                    <span className="room-topic">{room.topic}</span>
                                    <span className="room-level">{room.level}</span>
                                    <button
                                        className="join-room-btn"
                                        onClick={() => handleJoinRoom(room.id, room.topic, room.language, room.level)}
                                    >
                                        Join
                                    </button>
                                    <span className="room-users">
                                        {room.current_users} / {room.capacity} users
                                    </span>

                                </li>
                            ))
                        ) : (
                            <p>No rooms available for this filter.</p>
                        )}
                    </ul>
                </div>

                <div className="filters-section">
                    <h2>Filters</h2>
                    <div className="filters-container">
                        {filters.map((filter) => (
                            <div key={filter.id} className="filter-wrapper">
                                <button
                                    className={`filter-btn ${selectedFilter === filter.name ? "selected" : ""}`}
                                    onClick={() => handleFilterSelect(filter.name)}
                                >
                                    <img src={filter.icon} alt={filter.name} className="filter-icon" />
                                    <span className="filter-name">{filter.name}</span>

                                    <span
                                        className="filter-heart"
                                        onClick={(e) => {
                                            e.stopPropagation(); // предотвращает клик на фильтр
                                            const topicUUID = getTopicUUIDByName(filter.name);
                                            if (topicUUID) toggleFavourite(topicUUID);
                                        }}
                                    >
                    {favouriteTopicIds.includes(getTopicUUIDByName(filter.name))
                        ? <FaHeart color="red" />
                        : <FaRegHeart />}
                </span>
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RoomSelectionPage;
