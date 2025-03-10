import React, { Component } from "react";
import "../styles/SignupPage.css";
import globeYellowIcon from "../assets/globeYellow.png";

class SignupPage extends Component {
    render() {
        return (
            <div className="signup-page">
                <header className="navbar-signup">
                    <div className="navbar-left-signup">
                        <img src={globeYellowIcon} alt="Globe Icon" className="globe-icon"/>
                    </div>
                    <nav className="navbar-links-signup">
                        <a href="/create-room" className="nav-link-signup">Create a Room</a>
                        <a href="/room" className="nav-link-signup">Select Rooms</a>
                        <a href="/login" className="nav-link-signup">Log In</a>
                        <a href="/signup" className="signup-button-navbar">Sign Up</a>
                    </nav>
                </header>

                <main className="signup-form-container">
                    <h1 className="signup-title">Create an account</h1>
                    <p className="signup-description">
                        Join <span className="highlight">Lexio</span> and start practicing
                        languages with people around the world
                    </p>
                    <form className="signup-form">
                        <input
                            type="text"
                            placeholder="Username"
                            className="input-field"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input-field"
                        />
                        <button type="submit" className="signup-button-main">
                            Sign Up
                        </button>
                    </form>
                </main>
                <footer className="signup-footer">
                    <p>
                        Ready to start practicing? <a href="/room" className="footer-link">Join a room now!</a>
                    </p>
                </footer>
            </div>
        );
    }
}

export default SignupPage;
