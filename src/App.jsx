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
import RoomPage from "./pages/RoomPage";
import ProfilePage from "./pages/ProfilePage";
import MyProfile from "./pages/MyProfile";
import EditPage from "./pages/EditPage";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/test" element={<TestPage />} />
                    <Route path="/quiz/:language" element={<QuizPage />} />
                    <Route path="/language" element={<LanguagePage />} />
                    <Route path="/room" element={<RoomSelectionPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/roompage" element={<RoomPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/myprofile" element={<MyProfile />} />
                    <Route path="/edit" element={<EditPage />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
