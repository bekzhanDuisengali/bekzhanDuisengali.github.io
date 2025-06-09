import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/RoomPage.css";
import aboutIcon from "../assets/aboutIcon.png";
import exitIcon from "../assets/exitIcon.png";
import avatar from "../assets/avatar.png";
import sub from "../assets/sub.png";
import mic from "../assets/mic.png";
import micoff from "../assets/micoff.png";
import { io } from "socket.io-client";
import scenarios from "../Components/scenarios";
import socket from "../socket/socket";
import RatingForm from "./RatingForm";
const SERVER_URL = "http://localhost:5001";

const RoomPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const socketRef = useRef(null);
    const timerRef = useRef(null);
    const { topic, language, level, roomId } = location.state || {};

    // Состояния
    const [user, setUser] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [readyUsers, setReadyUsers] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);
    const [sessionEnded, setSessionEnded] = useState(false);
    const [scenario, setScenario] = useState(null);
    const [currentSpeaker, setCurrentSpeaker] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [countdown, setCountdown] = useState(null);
    const [animationCountdown, setAnimationCountdown] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [isMicOn, setIsMicOn] = useState(true);
    const [stream, setStream] = useState(null);
    const [showAbout, setShowAbout] = useState(false);
    const [showRating, setShowRating] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    // Получаем текущего пользователя из localStorage
    const currentUserId = user?.id;
    const usersToRate = users.filter(u => u.id !== currentUserId);
    const userToRateId = users.find(u => u.id !== currentUserId)?.id;

    // --- Функции ---

    const fetchUserFromLocalStorageOrAPI = async () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsUserLoading(false);
            return;
        }

        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (userId && token) {
            try {
                const res = await fetch(`${SERVER_URL}/api/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    localStorage.setItem("user", JSON.stringify(data));
                    setUser(data);
                } else {
                    console.error("Ошибка при получении пользователя");
                }
            } catch (err) {
                console.error("Ошибка запроса:", err);
            }
        }
        setIsUserLoading(false);
    };

    const fetchUsersInRoom = async () => {
        if (!roomId) return;
        try {
            const res = await fetch(`${SERVER_URL}/api/rooms/room-users?roomId=${roomId}`);
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            }
        } catch (err) {
            console.error("Failed to fetch users:", err);
        }
    };

    const joinRoom = () => {
        if (!user || !user.id || !roomId || !socketRef.current) return;
        socketRef.current.emit("joinRoom", {
            roomId,
            userId: user.id,
            username: user.username,
            level,
            topic,
        });
    };

    // const startSpeakerTimer = () => {
    //     setTimeLeft(60);
    //     const interval = setInterval(() => {
    //         setTimeLeft(prev => {
    //             if (prev <= 1) {
    //                 clearInterval(interval);
    //                 socketRef.current.emit("gameEnded", { roomId });
    //                 return 0;
    //             }
    //             return prev - 1;
    //         });
    //     }, 1000);
    // };
    const startSpeakerTimer = () => {
        setTimeLeft(60);

        // Очищаем предыдущий интервал, если есть
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    socketRef.current.emit("gameEnded", { roomId });
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const toggleMic = () => {
        if (!stream) return;
        const audioTrack = stream.getTracks()[0];
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicOn(audioTrack.enabled);
    };

    const handleReady = () => {
        if (isUserLoading) return;
        if (!user || !user.id || !user.username) return;

        socketRef.current.emit("ready", {
            roomId,
            user: { id: user.id, username: user.username },
            isReady: true,
        });
        setIsReady(true);
    };

    const handleExit = async () => {
        try {
            await fetch(`${SERVER_URL}/api/rooms/leave`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ roomId, userId: user?.id })
            });
        } catch (err) {
            console.error("Ошибка при выходе из комнаты:", err);
        } finally {
            if (socketRef.current?.connected) {
                socketRef.current.emit("leaveRoom", { roomId, userId: user?.id });
                socketRef.current.disconnect();
            }
            navigate("/room");
        }
    };

    // --- useEffect ---
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);
    // Подключение сокета
    useEffect(() => {
        const token = localStorage.getItem("token");
        socketRef.current = io(SERVER_URL, { auth: { token } });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    // Получение пользователя при загрузке
    useEffect(() => {
        fetchUserFromLocalStorageOrAPI();
    }, []);

    // Присоединение к комнате после загрузки пользователя
    useEffect(() => {
        if (user) joinRoom();
    }, [user]);

    // Получение пользователей комнаты
    useEffect(() => {
        fetchUsersInRoom();
    }, [roomId]);

    // Обновление пользователей и готовых пользователей с сокета
    useEffect(() => {
        const socket = socketRef.current;
        if (!socket) return;

        const handleUsersUpdate = (updatedUsers) => setUsers(updatedUsers);
        const handleReadyUsersUpdate = (readyUsersList) => {
            setReadyUsers(readyUsersList);
            if (user) setIsReady(readyUsersList.some(u => u.id === user.id));
        };

        const handleGameStarting = ({ scenario }) => {
            if (scenario?.topic === topic) {
                setScenario(scenario);
                setGameStarted(true);
            } else {
                console.warn("Сценарий не соответствует теме комнаты:", scenario.topic, topic);
            }
        };

        const handleCountdown = ({ countdown }) => setCountdown(countdown);

        const handleStartTurn = ({ user }) => {
            setCurrentSpeaker(user);
            setCountdown(null);
            startSpeakerTimer();
        };

        const handleGameEnded = () => {
            setShowRating(true);
            setIsReady(false);       // добавляем сброс готовности
            setGameStarted(false);   // добавляем сброс начала игры
        };

        socket.on("usersUpdated", handleUsersUpdate);
        socket.on("readyUsersUpdated", handleReadyUsersUpdate);
        socket.on("gameStarting", handleGameStarting);
        socket.on("countdown", handleCountdown);
        socket.on("startTurn", handleStartTurn);
        socket.on("gameEnded", handleGameEnded);

        return () => {
            socket.off("usersUpdated", handleUsersUpdate);
            socket.off("readyUsersUpdated", handleReadyUsersUpdate);
            socket.off("gameStarting", handleGameStarting);
            socket.off("countdown", handleCountdown);
            socket.off("startTurn", handleStartTurn);
            socket.off("gameEnded", handleGameEnded);
        };
    }, [user, topic]);

    // Таймер окончания сессии
    useEffect(() => {
        if (timeLeft === 0) {
            setSessionEnded(true);
            setShowRating(true);
        }
    }, [timeLeft]);

    // Анимация обратного отсчёта 3...2...1
    useEffect(() => {
        if (countdown === 3) {
            setAnimationCountdown(3);
            const interval = setInterval(() => {
                setAnimationCountdown(prev => {
                    if (prev === 1) {
                        clearInterval(interval);
                        return null;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    }, [countdown]);

    // Получение аудио потока для микрофона
    useEffect(() => {
        const getAudioStream = async () => {
            try {
                const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                setStream(audioStream);
            } catch (err) {
                console.error("Ошибка доступа к микрофону:", err);
            }
        };

        getAudioStream();

        return () => {
            stream?.getTracks().forEach(track => track.stop());
        };
    }, []);


    return (
        <div className="room-container">
            <div className="rooms-header">
                <button className="info-button" onClick={() => setShowAbout(!showAbout)}>
                    <img src={aboutIcon} alt="About" />
                    <span>About</span>
                </button>

                {showAbout && (
                    <div className="about-box">
                        <p>
                            Внизу находится карточка, по которой вы можете говорить и делиться своими мыслями. <br />
                            Топик находится в верхнем углу. <br />
                            Вы можете говорить, когда подойдёт ваша очередь. <br />
                            В конце сессии вы сможете оценить других пользователей, а они — вас :)
                        </p>
                    </div>
                )}

                <h1 className="room-title">"{topic || "Room Title"}"</h1>

                <button className="exit-button" onClick={handleExit}>
                    <img src={exitIcon} alt="Exit" />
                    <span>Exit</span>
                </button>
            </div>

            <div className="room-controls">
                <button className="category-button">{topic || "Category"}</button>
                <div className="turn-indicator">
                    {!sessionEnded && currentSpeaker ? (
                        <>
                            <span>{currentSpeaker.username}’s</span>
                            <div className="profile-circle">
                                <img src={avatar} alt="Speaker" />
                            </div>
                            <span>Turn</span>
                        </>
                    ) : (
                        <span>Waiting...</span>
                    )}
                </div>
                <button className="level-button">{level || "Level"}</button>
            </div>

            <div className="microphone-container">
                <button className="microphone-button" onClick={toggleMic}>
                    <img src={isMicOn ? mic : micoff} alt="Mic" />
                </button>
                <button className="subtitles-button">
                    <img src={sub} alt="Subtitles" />
                </button>
            </div>

            <div className="user-list">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div
                            key={user.id}
                            className={`user-avatar ${readyUsers.includes(user.id) ? 'ready' : ''}`}
                            onClick={() => {
                                if (user.id !== currentUserId) {
                                    setSelectedUserId(user.id);
                                }
                            }}
                            style={{
                                cursor: user.id !== currentUserId ? 'pointer' : 'default',
                                position: 'relative',
                            }}
                        >
                            <img src={avatar} alt={user.username} />
                            <span>
          {user.username}
                                {readyUsers.includes(user.id) && <span style={{ marginLeft: '6px' }}>✅</span>}
        </span>

                            {/* 👇 Кнопка отображается только для чужих пользователей */}
                            {selectedUserId === user.id && user.id !== currentUserId && (
                                <button
                                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded absolute top-full left-0"
                                    onClick={(e) => {
                                        e.stopPropagation(); // ❗ не передавать клик дальше
                                        window.open(`/profile/${user.id}`, "_blank"); // 👉 открыть в новой вкладке
                                    }}
                                >
                                    Перейти на профиль
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No users in the room</p>
                )}
            </div>

            <div className="ready-button-container">
                {(!isReady || sessionEnded) ? (
                    <button onClick={handleReady}>
                        {isReady ? "Отменить готовность" : "Я готов"}
                    </button>
                ) : (
                    !gameStarted && <p className="text-yellow-600 font-medium">Ожидание других игроков...</p>
                )}
            </div>

            {countdown !== null && (
                <div className="countdown">
                    <h2>Начинаем через: {countdown}...</h2>
                </div>
            )}

            {!sessionEnded && currentSpeaker && (
                <div className="speaker-announcement">
                    <h2>🎙 Сейчас говорит: {currentSpeaker.username}</h2>
                    <p className="text-lg text-gray-700">Осталось: {timeLeft} сек</p>
                </div>
            )}

            {/*<button onClick={showRandomScenario}>Show Scenario</button>*/}

            {animationCountdown !== null && (
                <div className="countdown-animation">
                    <h1>{animationCountdown}</h1>
                </div>
            )}

            {!sessionEnded && scenario && (
                <div className="mt-4 p-4 border rounded">
                    <h3 className="font-bold">{scenario.title} ({scenario.level})</h3>
                    <p>{scenario.content}</p>
                </div>
            )}
            {showRating && (
                <RatingForm
                    fromUserId={currentUserId}
                    roomId={roomId}
                    roomUsers={usersToRate}
                    onClose={() => setShowRating(false)}
                />
            )}

        </div>
    );
};

export default RoomPage;



