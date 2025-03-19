import React, { Component } from "react";
import "../styles/RoomPage.css";
import aboutIcon from "../assets/aboutIcon.png";
import exitIcon from "../assets/exitIcon.png";
import avatar from "../assets/avatar.png"
import sub from "../assets/sub.png";
import mic from "../assets/mic.png";

class RoomPage extends Component {
    render() {
        return (
            <div className="room-container">
                <div className="rooms-header">
                    <button className="info-button">
                        <img src={aboutIcon} alt="About"/>
                        <span>About</span>
                    </button>

                    <h1 className="room-title">"My favorite movie is..."</h1>

                    <button className="exit-button">
                        <img src={exitIcon} alt="Exit"/>
                        <span>Exit</span>
                    </button>
                </div>

                <div className="room-controls">
                    <button className="category-button">Movies & TV Shows</button>
                    <div className="turn-indicator">
                        <span>Name’s</span>
                        <div className="profile-circle">
                            <img src={avatar} alt="Turn"/>
                        </div>
                        <span>Turn</span>
                    </div>
                    <button className="level-button">Beginner</button>
                </div>

                <div className="microphone-container">
                    <button className="microphone-button"><img src={mic}/></button>
                    <button className="subtitles-button"><img src={sub}/></button>
                </div>

                <div className="user-list">
                    {["Karina", "Daniil", "Bekzhan", "Ryan", "David"].map((name) => (
                        <div key={name} className="user-avatar">
                            <img src={avatar} alt={name} />
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default RoomPage;
