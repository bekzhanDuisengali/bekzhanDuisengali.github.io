import React, { Component } from "react";
import { withRouter } from "../Components/withRouter";
import "../styles/LanguagePage.css";
import {Link} from "react-router-dom";

class LanguagePage extends Component {
    state = {
        selectedLanguage: null,
        showError: false,
    };

    handleLanguageSelect = (language) => {
        this.setState({ selectedLanguage: language, showError: false });
    };

    handleStart = () => {
        const { selectedLanguage } = this.state;

        if (!selectedLanguage) {
            this.setState({ showError: true });
        } else {
            this.props.navigate("/quiz");
        }
    };

    render() {
        const { selectedLanguage, showError } = this.state;

        const languages = [
            {name: "English" },
            {name: "French" },
            {name: "Spanish" },
        ];

        return (
            <div className="language-selection-container">

                <header className="header-language">
                    <h1><a href="/" className="logo-link">Lexio</a></h1>
                    <nav className="navbar-language">
                        <a href="#create-room">Create a Room</a>
                        <a href="#select-rooms">Select Rooms</a>
                        <a href="#login">Log In</a>
                        <button className="sign-up-language">Sign Up</button>
                    </nav>
                </header>

                <main className="main-language">
                    <div className="language-content">
                        <h2>Select the language you want to practice </h2>

                        {showError && (
                            <div className="error-message">Please select a language!</div>
                        )}

                        <button className="start-language" onClick={this.handleStart}>
                            Start
                        </button>
                    </div>

                    <div className="language-selection">
                        <div className="language-options">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    className={`language-btn ${
                                        selectedLanguage === lang.name ? "selected" : ""
                                    }`}
                                    onClick={() => this.handleLanguageSelect(lang.name)}
                                >
                                    <span className="lang-code">{lang.code}</span> {lang.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default withRouter(LanguagePage);
