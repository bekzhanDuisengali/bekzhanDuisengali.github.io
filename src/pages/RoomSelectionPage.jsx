import React, { Component } from "react";
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

class RoomSelectionPage extends Component {
    state = {
        selectedFilter: null,
        rooms: [
            { id: 1, language: "English", topic: "Travel Adventures", filter: "Travel Adventures", participants: "1/2" },
            { id: 2, language: "Spanish", topic: "Sports & Fitness", filter: "Sports & Fitness", participants: "2/4" },
        ],
    };

    handleFilterSelect = (filter) => {
        this.setState((prevState) => ({
            selectedFilter: prevState.selectedFilter === filter ? null : filter,
        }));
    };


    render() {
        const { selectedFilter, rooms } = this.state;

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
            ? rooms.filter((room) => room.filter === selectedFilter)
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
                            <select className="dropdown">
                                <option>Topic</option>
                                {filters.map((filter) => (
                                    <option key={filter.id}>{filter.name}</option>
                                ))}
                            </select>
                            <select className="dropdown">
                                <option>Language</option>
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                            <select className="dropdown">
                                <option>Level</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                            <button className="create-room-btn"><a href="/roompage" className="create-room-btn">Create Room</a></button>
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
                                    className={`filter-btn ${
                                        selectedFilter === filter.name ? "selected" : ""
                                    }`}
                                    onClick={() => this.handleFilterSelect(filter.name)}
                                >
                                    <img
                                        src={filter.icon}
                                        alt={filter.name}
                                        className="filter-icon"
                                    />
                                    <span className="filter-name">{filter.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomSelectionPage;
