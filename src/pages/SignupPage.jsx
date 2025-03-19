import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignupPage.css";

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);

        if (!username || !email || !password) {
            setError("Все поля обязательны");
            return;
        }

        if (password.length < 6) {
            setError("Пароль должен быть не менее 6 символов");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Ошибка регистрации");
            }

            alert("Регистрация успешна!");
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="signup-page">
            <h1>Регистрация</h1>
            <form onSubmit={handleSignup} className="signup-form">
                {error && <p className="error-message">{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default SignupPage;
