import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import globeIcon from "../assets/globe.png";
import manIcon from "../assets/man.png";
import leafIcon from "../assets/leaf.png";
import earthIcon from "../assets/earth.png";
import languageIcon from "../assets/lang.png";
import dec1Icon from "../assets/dec1.png"
import dec2Icon from "../assets/dec2.png"
import dec3Icon from "../assets/dec3.png"
import avatarIcon from "../assets/avatar.png"
import circle1Icon from "../assets/circle2.png"
import circle2Icon from "../assets/circle2.png"
import circle3Icon from "../assets/circle2.png"
import circle4Icon from "../assets/circle1.png"
import circle5Icon from "../assets/circle1.png"
import circle6Icon from "../assets/circle1.png"
import circle7Icon from "../assets/circle1.png"



class Main extends Component {
    isUserLoggedIn = () => {
        return localStorage.getItem("token") !== null;
    };
    render() {
        return (
            <div className="app-container">
                <header className="header">
                    <img src={globeIcon} alt="Globe" className="nav-icon" />
                    <nav className="navbar-main">
                        {!this.isUserLoggedIn() ? (
                            <>
                                <a href="/login" className="nav-link-main">Log In</a>
                                <button className="sign-up-main"><a href="/signup" className="signup-link">Sign Up</a></button>
                            </>
                        ) : (
                            <>
                            <a href="/myprofile" className="nav-link-main">Profile</a>
                            </>
                            )}
                    </nav>
                </header>

                <main className="main-content">
                    <div className="content-sections">
                        <img src={dec1Icon} alt="dec1" className="dec1"/>
                        <img src={circle7Icon} className="circle7-icon"/>
                        <div className="title-section">
                            <img src={languageIcon} alt="Language" className="language-icon"/>
                            <h1 className="title">
                                Lexi<span className="title-highlight">o</span>
                            </h1>
                            <img src={dec2Icon} alt="dec2" className="dec2"/>
                            <div className="subtitle">
                                <p className="subtitle-1">Practice languages</p>
                                <p className="subtitle-2">with people around the world</p>
                            </div>
                        </div>

                        <img src={dec3Icon} alt="dec3" className="dec3"/>
                        <div className="container">
                            <div className="how-it-works-container">
                                <img src={leafIcon} alt="Leaf" className="leaf-icon"/>
                                <div className="how-it-works-content">
                                    <h2 className="sec-title">How It Works</h2>
                                    <p className="description">
                                        Join language rooms, practice speaking with others, and improve your
                                        skills step by step — all in a fun, interactive environment!
                                    </p>
                                    <div className="striped-background"></div>
                                </div>
                                <div className="decorations">
                                    <img src={earthIcon} alt="Earth" className="earth-icon"/>
                                </div>
                            </div>

                            <div className="cta-buttons">
                                <Link to="/signup" className="signup-link">
                                    <button className="sign-up-button">Sign Up!</button>
                                </Link>
                                <Link to="/test" className="test-button-link">
                                    <button className="test-button">Take Test</button>
                                </Link>
                            </div>

                            <div className="content">
                                <img src={circle1Icon} alt="circle" className="circle1-icon"/>
                                <img src={circle2Icon} alt="circle" className="circle2-icon"/>
                                <img src={circle3Icon} alt="circle" className="circle3-icon"/>
                                <img src={circle4Icon} alt="circle" className="circle4-icon"/>
                                <img src={circle5Icon} alt="circle" className="circle5-icon"/>
                                <img src={circle6Icon} alt="circle" className="circle6-icon"/>
                                <img src={manIcon} alt="Man" className="man-icon"/>
                                <div className="popular-reviews">
                                    <h2 className="third-title">Popular Reviews</h2>
                                </div>
                                <div className="reviews-list">
                                    <div className="review-item">
                                        <p>A great app for language practice!</p>
                                    </div>
                                    <div className="review-item">
                                        <p>A very user-friendly interface and a cool rating system.</p>
                                    </div>
                                    <div className="review-item">
                                        <p>Pleasant atmosphere and interesting topics for discussion.</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </main>

                <div className="practice-container">
                    <h1 className="practice-title">Start Practicing Now</h1>
                    <div className="practice-options">
                        <div className="practice-option">
                            <div className="avatars">
                                <img src={avatarIcon} alt="Avatar 1" className="avatar"/>
                                <img src={avatarIcon} alt="Avatar 2" className="avatar"/>
                            </div>
                            <button className="join-button"><a href="/room">Join In</a></button>
                        </div>

                        <div className="practice-option">
                            <div className="avatars">
                                <img src={avatarIcon} alt="Avatar 1" className="avatar"/>
                                <img src={avatarIcon} alt="Avatar 2" className="avatar"/>
                            </div>
                            <button className="join-button highlight"><a href="/room">Join In</a></button>
                        </div>

                        <div className="practice-option">
                            <div className="avatars">
                                <img src={avatarIcon} alt="Avatar 1" className="avatar"/>
                                <img src={avatarIcon} alt="Avatar 2" className="avatar"/>
                            </div>
                            <button className="join-button"><a href="/room">Join In</a></button>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <p>Reznikov Daniil, Dautova Karina, Duisengali Bekzhan</p>
                    <p>2025</p>
                </footer>
            </div>
        );
    }
}

export default Main;
