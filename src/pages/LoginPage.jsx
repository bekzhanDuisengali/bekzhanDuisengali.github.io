import React, { Component } from "react";
import "../styles/LoginPage.css";
import globeYellowIcon from "../assets/globeYellow.png";

class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                <header className="navbar-login">
                    <div className="navbar-left">
                        <img src={globeYellowIcon} alt="Globe Icon" className="globe-icon-login"/>
                    </div>
                    <nav className="navbar-link-login">
                        <a href="/create-room" className="nav-link-login">Create a Room</a>
                        <a href="/room" className="nav-link-login">Select Rooms</a>
                        <a href="/login" className="nav-link-login">Log In</a>
                        <a href="/signup" className="signup-button-login-nav">Sign Up</a>
                    </nav>
                </header>

                <main className="login-form-container">
                    <h1 className="login-title">Log In</h1>
                    <form className="login-form">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input-field email-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field password-input"
                        />
                        <button type="submit" className="login-button">
                            Log In
                        </button>
                    </form>
                    <p className="signup-redirect">
                        Don't have an account?
                    </p>
                    <button className="signup-main-button"><a href="/signup">Sign Up</a></button>
                </main>
                <footer className="login-footer">
                    <p>
                        Ready to start practicing? <a href="/room" className="footer-link">Join a room now!</a>
                    </p>
                </footer>
            </div>
        );
    }
}

export default LoginPage;
