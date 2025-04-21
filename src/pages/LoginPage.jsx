import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import globeYellowIcon from "../assets/globeYellow.png";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("http://localhost:5001/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log("Response Data:", data);
            if (!response.ok) {
                throw new Error(data.error || "Ошибка входа");
            }
            localStorage.setItem("userId", data.userId);
            localStorage.setItem("token", data.token);

            navigate("/test");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-page">
            <header className="navbar-login">
                <div className="navbar-left">
                    <img src={globeYellowIcon} alt="Globe Icon" className="globe-icon-login" />
                </div>
                <nav className="navbar-link-login">
                    <a href="/room" className="nav-link-login">Select Rooms</a>
                    <a href="/login" className="nav-link-login">Log In</a>
                    <a href="/signup" className="signup-button-login-nav">Sign Up</a>
                </nav>
            </header>

            <main className="login-form-container">
                <h1 className="login-title">Log In</h1>
                <form className="login-form" onSubmit={handleLogin}>
                    {error && <p className="error-message">{error}</p>}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field email-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
};

export default LoginPage;
