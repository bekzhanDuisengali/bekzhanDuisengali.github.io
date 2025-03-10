import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import TestPage from "./pages/TestPage.jsx";
import "./App.css";
import QuizPage from "./pages/QuizPage.jsx";
import LanguagePage from "./pages/LanguagePage";
import RoomSelectionPage from "./pages/RoomSelectionPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/test" element={<TestPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/language" element={<LanguagePage />} />
                    <Route path="/room" element={<RoomSelectionPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
