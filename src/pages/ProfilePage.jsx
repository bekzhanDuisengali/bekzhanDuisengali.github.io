import React, { Component } from "react";
import "../styles/ProfilePage.css";
import avatar from "../assets/avatar.png";
import addFriendIcon from "../assets/addFriendIcon.png";
import achievement1 from "../assets/achievement1.jpg";
import achievement2 from "../assets/achievement2.jpg";
import achievement3 from "../assets/achievement3.jpg";
import globeYellowIcon from "../assets/globeYellow.png";

class ProfilePage extends Component {
    render() {
        return (
            <div className="profile-container">
                <div className="profile-header">
                    <div className="globe-icon">
                        <img src={globeYellowIcon} alt="Globe Icon"/>
                    </div>
                    <div className="navigation">
                        <a href="/room" className="select-rooms">Select Rooms</a>
                        <button className="profile-button"><a href="/myprofile">Profile</a></button>
                    </div>
                </div>

                <div className="profile-content">
                    <div className="left-section">
                        <div className="avatar-section">
                            <div className="avatar">
                                <img src={avatar} alt="Profile"/>
                                <div className="rating">
                                    <span className="rating-score">3.8</span>
                                </div>
                            </div>
                            <h2 className="name">Daniil</h2>
                            <button className="add-friend-button">
                                <img src={addFriendIcon} alt="Add Friend" />
                                Add Friend
                            </button>
                        </div>

                        <div className="favorite-topics">
                            <h3>Favorite Topics:</h3>
                            <p className="topic">Travel Adventures</p>
                            <p className="topic">Movies & TV Shows</p>
                            <p className="topic">Daily Life</p>
                        </div>
                    </div>

                    <div className="right-section">
                        <div className="languages">
                            <h3>Languages:</h3>
                            <p>English: <span className="intermediate">Intermediate</span></p>
                            <p>Spanish: <span className="not-studied">not studied</span></p>
                            <p>French: <span className="advanced">Advanced</span></p>
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
                </div>
            </div>
        );
    }
}

export default ProfilePage;
