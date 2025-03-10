import React, { Component } from "react";
import "../styles/TestPage.css";
import globeYellowIcon from "../assets/globeYellow.png";
import {Link} from "react-router-dom";

class TestPage extends Component {
    render() {
        return (
            <div className="test-page">
                <header className="test-header">
                    <div className="logo">
                        <img src={globeYellowIcon} alt="Globe" className="nav-icon"/>
                    </div>
                    <nav className="navbar-test">
                    <a href="#" className="nav-link-test">Create a Room</a>
                        <a href="/room" className="nav-link-test">Select Rooms</a>
                        <a href="/login" className="nav-link-test">Log In</a>
                        <button className="sign-up-test"><a href="/signup" className="signup">Sign Up</a></button>
                    </nav>
                </header>

                <main className="test-main">
                    <h1 className="main-title">Test your language level</h1>
                    <p className="main-description">
                        Take this short quiz to determine your proficiency level in your chosen language.
                        Accurate results will help us match you with the right conversations!
                    </p>
                    <section className="instructions">
                        <h2 className="instructions-title">Instruction</h2>
                        <ul className="instructions-list">
                            <li className="instruction-item">
                                <span className="number-circle">1</span> Answer 20 multiple-choice questions.
                            </li>
                            <li className="instruction-item">
                                <span className="number-circle">2</span> Each question must be completed before moving to the next.
                            </li>
                            <li className="instruction-item">
                                <span className="number-circle">3</span> Your result will be displayed at the end.
                            </li>
                        </ul>
                    </section>
                    <Link to="/language" className="start-test-button-link">
                    <button className="start-test-button">Start The Test</button>
                    </Link>
                </main>

                <footer className="test-footer">
                    <p>
                        Ready to start practicing? <a href="/room" className="footer-link">Join a room now!</a>
                    </p>
                </footer>
            </div>
        );
    }
}

export default TestPage;
