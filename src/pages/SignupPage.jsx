import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignupPage.css";
import globeYellowIcon from "../assets/globeYellow.png";
import { jwtDecode } from "jwt-decode";
const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        if (!username || !email || !password || !confirmPassword) {
            setError("Все поля обязательны");
            setIsSubmitting(false);
            return;
        }

        if (password.length < 6) {
            setError("Пароль должен быть не менее 6 символов");
            setIsSubmitting(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Пароли не совпадают");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Ошибка регистрации");
            }

            const decodedToken = jwtDecode(data.token);
            const userId = decodedToken.userId;

            localStorage.setItem("userId", data.userId);
            localStorage.setItem("token", data.token);
            navigate("/myprofile");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="signup-page">
            <header className="navbar-signup">
                <div className="navbar-left">
                    <img src={globeYellowIcon} alt="Globe Icon" className="globe-icon-login" />
                </div>
                <nav className="navbar-link-login">
                    <a href="/room" className="nav-link-login">Select Rooms</a>
                    <a href="/login" className="nav-link-login">Log In</a>
                    <a href="/signup" className="signup-button-login-nav">Sign Up</a>
                </nav>
            </header>

            <div className="signup-form-container">
                <h1 className="signup-title">Create an account</h1>
                <p className="signup-description">
                    Join <span className="highlight">Lexio</span> and start practicing languages with people around the world
                </p>

                <form onSubmit={handleSignup} className="signup-form">
                    {error && <p className="error-message">{error}</p>}

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input-field"
                    />

                    <button type="submit" className="signup-button-main" disabled={isSubmitting}>
                        {isSubmitting ? "Регистрация..." : "Sign up"}
                    </button>
                </form>
            </div>

            <footer className="signup-footer">
                Ready to start practicing? <a href="/room" className="footer-link">Join a room now!</a>
            </footer>
        </div>
    );
};

export default SignupPage;
