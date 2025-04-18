import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/RoomPage.css";
import aboutIcon from "../assets/aboutIcon.png";
import exitIcon from "../assets/exitIcon.png";
import avatar from "../assets/avatar.png";
import sub from "../assets/sub.png";
import mic from "../assets/mic.png";
const scenarios = [
    {
        level: "Beginner",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "My Favorite Movie",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite movie is... (назови фильм)",
                    "I like this movie because... (объясни причину)",
                    "The main character is... (опиши главного героя)",
                    "The story is about... (коротко расскажи сюжет)",
                    "I watched this movie with... (с кем смотрел)",
                    "I recommend this movie because... (почему советуешь)"
                ]
            },
            {
                title: "Animated Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I like animated movies. My favorite is... (назови мультфильм)",
                    "The animation style is... (например, 3D, рисованное)",
                    "The main characters are... (перечисли)",
                    "The funniest moment in the movie is...",
                    "I watched this movie when I was... (возраст)",
                    "Would you like to watch it? (спроси у собеседника)"
                ]
            },
            {
                title: "Watching a Movie in a Cinema",
                topic: "Movies & TV Shows",
                content: [
                    "The last time I went to the cinema was... (когда?)",
                    "I watched... (название фильма)",
                    "I went with... (с кем?)",
                    "The best thing about the cinema experience was... (что понравилось)",
                    "The popcorn was... (вкус или впечатление)",
                    "I want to go again to watch... (что хочешь посмотреть)"
                ]
            },
            {
                title: "Talking about a TV Show",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite TV show is... (название)",
                    "The main characters are... (персонажи)",
                    "It is about... (о чём шоу?)",
                    "I watch it on... (платформа)",
                    "I like it because... (почему нравится)",
                    "I recommend it to people who... (кому советуешь)"
                ]
            },
            {
                title: "My First Movie",
                topic: "Movies & TV Shows",
                content: [
                    "The first movie I remember watching is... (название)",
                    "I watched it when I was... (возраст)",
                    "It was about... (сюжет)",
                    "I watched it with... (с кем?)",
                    "I liked it because... (что понравилось)",
                    "Now I want to watch it again because... (почему хочешь пересмотреть)"
                ]
            },
            {
                title: "Action Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I like action movies. My favorite is... (название)",
                    "The main hero is... (главный герой)",
                    "The best scene is when... (опиши сцену)",
                    "There is a lot of... (например: fighting, shooting, chasing)",
                    "I watched this movie... (когда?)",
                    "Would you like to watch it? (вопрос к собеседнику)"
                ]
            },
            {
                title: "Horror Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I (don’t) like horror movies. (укажи своё мнение)",
                    "The scariest movie I watched is... (название)",
                    "The scariest part was when... (опиши момент)",
                    "I watched it with... (с кем?)",
                    "I felt... (эмоции)",
                    "Do you like horror movies? (вопрос)"
                ]
            },
            {
                title: "Comedy Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I like comedy movies because... (почему нравятся)",
                    "My favorite comedy is... (название)",
                    "The funniest scene is when... (опиши момент)",
                    "The actors in this movie are... (какие?)",
                    "I laughed a lot because... (причина)",
                    "Do you like comedies? (вопрос)"
                ]
            },
            {
                title: "Movies vs. TV Shows",
                topic: "Movies & TV Shows",
                content: [
                    "I like watching... (movies / TV shows more)",
                    "... are better because... (объясни)",
                    "My favorite TV show is... (если выбираешь шоу)",
                    "My favorite movie is... (если выбираешь фильмы)",
                    "I usually watch them on... (где?)",
                    "What do you like more? (вопрос)"
                ]
            },
            {
                title: "Future Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I want to watch... (фильм)",
                    "It will be released in... (когда?)",
                    "It is about... (сюжет)",
                    "The main actors are... (актёры)",
                    "I will watch it with... (с кем?)",
                    "Are you excited about any upcoming movies? (вопрос)"
                ]
            }
        ],
    },

    {
        level: "Elementary",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "My Favorite Movie",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite movie is... (название фильма)",
                    "It is a (genre: comedy, action, drama, etc.) movie.",
                    "The main character is... (имя главного героя)",
                    "The movie is about... (короткое описание сюжета)",
                    "I like this movie because... (причина)",
                    "Have you seen this movie? What do you think about it?"
                ]
            },
            {
                title: "Movie Night",
                topic: "Movies & TV Shows",
                content: [
                    "I like to watch movies at (home / the cinema).",
                    "I usually watch movies with... (friends, family, alone).",
                    "My favorite place to watch movies is... (на диване, в кинотеатре).",
                    "I usually eat... (popcorn, chips, pizza) when I watch movies.",
                    "What do you like to eat when you watch movies?"
                ]
            },
            {
                title: "TV Shows I Watch",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite TV show is... (название).",
                    "It is about... (короткое описание).",
                    "The main character is... (имя персонажа).",
                    "I watch it (every day, once a week).",
                    "Do you watch any TV shows? Which one is your favorite?"
                ]
            },
            {
                title: "Talking About a Movie Scene",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite scene in the movie is...",
                    "In this scene, the character... (короткое описание сцены).",
                    "I like this scene because... (объяснение).",
                    "What is your favorite scene in a movie?"
                ]
            },
            {
                title: "Animated Movies",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite animated movie is... (название).",
                    "It is about... (короткое описание).",
                    "My favorite character is... (имя персонажа).",
                    "Do you like animated movies?"
                ]
            },
            {
                title: "Watching Movies in English",
                topic: "Movies & TV Shows",
                content: [
                    "I sometimes watch movies in English.",
                    "It helps me learn new words.",
                    "I watch with (subtitles / no subtitles).",
                    "Do you watch movies in English?"
                ]
            },
            {
                title: "Movie Genres",
                topic: "Movies & TV Shows",
                content: [
                    "I like (action / comedy / horror / science fiction) movies.",
                    "My least favorite genre is...",
                    "What kind of movies do you like?"
                ]
            },
            {
                title: "Superheroes in Movies",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite superhero is... (имя персонажа).",
                    "He/She has (superpowers or abilities).",
                    "The best superhero movie is... (название).",
                    "Do you like superhero movies?"
                ]
            },
            {
                title: "The Last Movie I Watched",
                topic: "Movies & TV Shows",
                content: [
                    "The last movie I watched was...",
                    "I watched it (yesterday / last week).",
                    "It was (good / bad / interesting).",
                    "Would you recommend the last movie you watched?"
                ]
            },
            {
                title: "Future Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I want to watch... (название будущего фильма).",
                    "It will be released in... (месяц, год).",
                    "It is about...",
                    "The main actors are...",
                    "I will watch it with...",
                    "Are you excited about any upcoming movies?"
                ]
            }
        ]
    },

    {
        level: "Pre-Intermediate",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "Describing a Movie",
                topic: "Movies & TV Shows",
                content: [
                    "One of the best movies I have seen is... (название фильма).",
                    "It belongs to the (genre: comedy, action, thriller, etc.) category.",
                    "The story takes place in... (город, страна, время).",
                    "The main character is... (имя) played by (актёр).",
                    "The movie is about... (короткое описание сюжета).",
                    "What’s your favorite movie, and what is it about?"
                ]
            },
            {
                title: "My Movie-Watching Habits",
                topic: "Movies & TV Shows",
                content: [
                    "I usually watch movies (at home / in the cinema).",
                    "I prefer watching movies (alone / with friends / with family).",
                    "I usually watch movies (once a week / on weekends / every evening).",
                    "I like watching movies in (English / my native language).",
                    "Do you prefer watching movies alone or with others? Why?"
                ]
            },
            {
                title: "My Favorite TV Series",
                topic: "Movies & TV Shows",
                content: [
                    "One of my favorite TV series is... (название).",
                    "It has (number) seasons and (number) episodes.",
                    "The story is about... (описание).",
                    "My favorite character is... because...",
                    "If you could recommend one TV series, which one would it be?"
                ]
            },
            {
                title: "The Best Actor/Actress",
                topic: "Movies & TV Shows",
                content: [
                    "One of my favorite actors/actresses is...",
                    "He/She played in movies like...",
                    "I like this actor/actress because...",
                    "In my opinion, his/her best role was in...",
                    "Which actor/actress do you admire?"
                ]
            },
            {
                title: "A Memorable Movie Scene",
                topic: "Movies & TV Shows",
                content: [
                    "One scene that I will never forget is...",
                    "In this scene, the character... (описание действий).",
                    "This scene made me feel... (excited, sad, happy, scared).",
                    "If you could relive a scene from a movie, which one would it be?"
                ]
            },
            {
                title: "Comparing Movies and Books",
                topic: "Movies & TV Shows",
                content: [
                    "I think movies based on books are usually (better / worse) than the books.",
                    "One example is... (название фильма, основанного на книге).",
                    "In the book, the story was...",
                    "In the movie, they changed...",
                    "Do you prefer reading books or watching movies?"
                ]
            },
            {
                title: "Watching Movies in Original Language",
                topic: "Movies & TV Shows",
                content: [
                    "I prefer watching movies in (original language / my native language).",
                    "Watching movies in English helps me... (learn new words, improve pronunciation).",
                    "I sometimes watch with (subtitles / no subtitles).",
                    "Do you think watching movies in English is useful for learning?"
                ]
            },
            {
                title: "Superhero Movies – Fun or Overrated?",
                topic: "Movies & TV Shows",
                content: [
                    "I think superhero movies are (exciting / boring / too similar).",
                    "My favorite superhero movie is... because...",
                    "The best superhero ever is...",
                    "Do you think superhero movies are too popular?"
                ]
            },
            {
                title: "The Last Movie I Watched",
                topic: "Movies & TV Shows",
                content: [
                    "The last movie I watched was... (название).",
                    "It was about... (короткое описание).",
                    "I liked/disliked it because...",
                    "I would/wouldn’t recommend it to others because...",
                    "What was the last movie you watched, and how did you like it?"
                ]
            },
            {
                title: "Future Movies & Expectations",
                topic: "Movies & TV Shows",
                content: [
                    "I am looking forward to watching... (название предстоящего фильма).",
                    "It will be released in... (месяц, год).",
                    "The trailer looks (amazing / disappointing).",
                    "The actors in this movie are...",
                    "Do you have any upcoming movies that you’re excited about?"
                ]
            }
        ]
    },

    {
        level: "Intermediate",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "My Favorite Movie",
                topic: "Movies & TV Shows",
                content: [
                    "One of my all-time favorite movies is... (название).",
                    "It was directed by... (режиссёр).",
                    "The main actors are... (актёры).",
                    "The movie is about... (описание сюжета).",
                    "I like it because... (объяснение).",
                    "Have you ever watched this movie? What do you think about it?"
                ]
            },
            {
                title: "The Impact of Movies",
                topic: "Movies & TV Shows",
                content: [
                    "Movies can influence people by... (учат чему-то, вдохновляют, меняют мнение).",
                    "One movie that changed my perspective on something is...",
                    "It made me realize that...",
                    "Have you ever watched a movie that changed the way you think?"
                ]
            },
            {
                title: "My Ideal Movie Night",
                topic: "Movies & TV Shows",
                content: [
                    "For me, the perfect movie night includes... (друзья, пицца, попкорн).",
                    "I prefer watching movies (at home / in a cinema) because...",
                    "I usually choose (comedy / horror / thriller / action) movies for a fun night.",
                    "If you could plan a movie night, what movie would you choose and why?"
                ]
            },
            {
                title: "Movie Genres – Which One is the Best?",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite movie genre is...",
                    "I enjoy this genre because... (интересный сюжет, хорошие актёры, эмоции).",
                    "One of the best movies in this genre is... (название).",
                    "Are there any movie genres that you don’t like? Why?"
                ]
            },
            {
                title: "Watching Movies vs. TV Series",
                topic: "Movies & TV Shows",
                content: [
                    "I prefer watching (movies / TV series) because...",
                    "The best TV series I have watched is...",
                    "It has (number) seasons, and my favorite season was...",
                    "One advantage of watching TV series is...",
                    "One disadvantage of watching TV series is...",
                    "Do you prefer short TV series or long ones with many seasons?"
                ]
            },
            {
                title: "A Movie That Disappointed Me",
                topic: "Movies & TV Shows",
                content: [
                    "I was really excited to watch... (название).",
                    "But after watching it, I felt... (разочарован, скучно, не впечатлило).",
                    "The problem was... (плохой сюжет, плохая актёрская игра, скучная концовка).",
                    "Have you ever watched a movie that disappointed you?"
                ]
            },
            {
                title: "The Role of Soundtracks in Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I think soundtracks are (very important / not so important) in movies.",
                    "A movie with a great soundtrack is... (название).",
                    "The music in this movie makes me feel... (эмоции).",
                    "Do you think a soundtrack can make a bad movie better?"
                ]
            },
            {
                title: "Classic vs. Modern Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I prefer (classic / modern) movies because...",
                    "One classic movie that I like is...",
                    "One modern movie that I like is...",
                    "What do you think is the main difference between classic and modern movies?"
                ]
            },
            {
                title: "A Movie I Would Recommend",
                topic: "Movies & TV Shows",
                content: [
                    "If I had to recommend one movie to a friend, it would be...",
                    "The reason is...",
                    "It has an interesting story about...",
                    "I think you would like it if you enjoy... (жанр, актёры, сюжет).",
                    "What movie would you recommend to me?"
                ]
            },
            {
                title: "The Future of Movies",
                topic: "Movies & TV Shows",
                content: [
                    "In the future, I think movies will be... (более интерактивные, с искусственным интеллектом, в виртуальной реальности).",
                    "Maybe people will watch movies in... (VR, с голограммами, через чипы в мозге).",
                    "One thing I hope will change about movies in the future is...",
                    "What do you think the future of movies will look like?"
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "The Role of Movies in Society",
                topic: "Movies & TV Shows",
                content: [
                    "Movies are not just entertainment; they can also... (учить, вдохновлять, информировать).",
                    "A movie that had a big impact on society is... (название).",
                    "It influenced people by...",
                    "Do you think movies should always have a deeper message, or is entertainment enough?"
                ]
            },
            {
                title: "The Most Overrated Movie",
                topic: "Movies & TV Shows",
                content: [
                    "In my opinion, one of the most overrated movies is...",
                    "People love it because...",
                    "But I think it is... (скучный, предсказуемый, переоценённый).",
                    "What movie do you think is overrated?"
                ]
            },
            {
                title: "Book vs. Movie Adaptations",
                topic: "Movies & TV Shows",
                content: [
                    "Many movies are based on books. One example is...",
                    "I (liked/didn’t like) the movie adaptation because...",
                    "In my opinion, the book was (better/worse) than the movie because...",
                    "Do you prefer reading the book first or watching the movie first?"
                ]
            },
            {
                title: "The Psychology of Horror Movies",
                topic: "Movies & TV Shows",
                content: [
                    "Some people love horror movies because...",
                    "Others avoid them because...",
                    "One of the scariest horror movies I’ve watched is...",
                    "What do you think makes a horror movie truly scary?"
                ]
            },
            {
                title: "Movies That Changed the Film Industry",
                topic: "Movies & TV Shows",
                content: [
                    "Some movies revolutionized the film industry. One example is...",
                    "This movie was innovative because... (спецэффекты, сюжет, технологии).",
                    "Today, its influence can be seen in... (других фильмах, индустрии).",
                    "What movie do you think had the biggest impact on cinema?"
                ]
            },
            {
                title: "The Ethics of Movie Making",
                topic: "Movies & TV Shows",
                content: [
                    "Some movies are controversial because they include... (насилие, политика, исторические события).",
                    "One example of a controversial movie is...",
                    "Some people think movies should avoid sensitive topics. I (agree/disagree) because...",
                    "Do you think filmmakers should have complete freedom in what they create?"
                ]
            },
            {
                title: "Streaming vs. Cinema",
                topic: "Movies & TV Shows",
                content: [
                    "With streaming services, fewer people go to the cinema.",
                    "I personally prefer (watching at home / going to the cinema) because...",
                    "One advantage of streaming is...",
                    "One disadvantage is...",
                    "Do you think cinemas will disappear in the future?"
                ]
            },
            {
                title: "Movie Budgets – Do Expensive Movies Always Succeed?",
                topic: "Movies & TV Shows",
                content: [
                    "Some of the most expensive movies include...",
                    "A high budget does not always mean a good movie. One example is...",
                    "However, some low-budget movies became very successful, like...",
                    "What do you think is more important: budget or creativity?"
                ]
            },
            {
                title: "Movies and Cultural Differences",
                topic: "Movies & TV Shows",
                content: [
                    "Movies can reflect the culture of a country. One example is...",
                    "In my culture, movies often include... (традиции, семейные ценности, музыка).",
                    "One cultural difference I noticed in foreign movies is...",
                    "What movie do you think best represents your culture?"
                ]
            },
            {
                title: "The Future of Storytelling in Movies",
                topic: "Movies & TV Shows",
                content: [
                    "In the future, storytelling in movies will change by...",
                    "Maybe we will see more... (интерактивные фильмы, ИИ-сценаристы, персонализированные сюжеты).",
                    "One thing I hope will NOT change about movies is...",
                    "If you could predict the future of movies, what would it be like?"
                ]
            }
        ]
    },
    {
        level: "Advanced",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "The Philosophy of Cinema",
                topic: "Movies & TV Shows",
                content: [
                    "What, in your opinion, defines a great movie—story, cinematography, or emotional impact?",
                    "Can a movie be considered 'art' if it is purely for entertainment?",
                    "What philosophical themes in movies have influenced your way of thinking?"
                ]
            },
            {
                title: "The Dark Side of the Film Industry",
                topic: "Movies & TV Shows",
                content: [
                    "Hollywood and other film industries are often criticized for... (exploitation, typecasting, lack of diversity).",
                    "Do you think the industry prioritizes profit over creativity?",
                    "How should filmmakers balance artistic freedom and ethical responsibility?"
                ]
            },
            {
                title: "The Psychology of Movie-Watching",
                topic: "Movies & TV Shows",
                content: [
                    "Why do people form strong emotional attachments to movies and characters?",
                    "Do you think watching violent movies influences people's behavior in real life?",
                    "How do different genres affect our mood and thinking?"
                ]
            },
            {
                title: "The Future of AI in Filmmaking",
                topic: "Movies & TV Shows",
                content: [
                    "AI is already being used in scriptwriting and editing. Do you think AI could replace human directors in the future?",
                    "Would you watch a movie completely created by AI? Why or why not?",
                    "What are the ethical concerns of using AI actors instead of real people?"
                ]
            },
            {
                title: "The Role of Propaganda in Cinema",
                topic: "Movies & TV Shows",
                content: [
                    "Can movies shape public opinion and political ideologies?",
                    "Name a movie that you think was used as propaganda, and explain why.",
                    "Should filmmakers be responsible for ensuring their movies are politically neutral?"
                ]
            },
            {
                title: "The Cultural Impact of Movies",
                topic: "Movies & TV Shows",
                content: [
                    "Can a single movie change an entire generation's perspective on a topic?",
                    "How have movies influenced global culture?",
                    "Is there a movie that made you see the world differently?"
                ]
            },
            {
                title: "The Death of Traditional Cinema?",
                topic: "Movies & TV Shows",
                content: [
                    "With the rise of streaming, will cinemas eventually disappear?",
                    "Do you think movie theaters offer an experience that cannot be replicated at home?",
                    "How would you reinvent the cinema experience to keep it relevant?"
                ]
            },
            {
                title: "Ethical Dilemmas in Movie-Making",
                topic: "Movies & TV Shows",
                content: [
                    "Should actors be allowed to play characters from cultures they do not belong to?",
                    "Is it ethical to digitally recreate deceased actors for new movies?",
                    "If a film director is involved in a scandal, should their movies be boycotted?"
                ]
            },
            {
                title: "The Influence of Movies on Human Behavior",
                topic: "Movies & TV Shows",
                content: [
                    "Can a movie inspire real social change? Give examples.",
                    "Have you ever changed your opinion about something after watching a movie?",
                    "How do movies reinforce or break stereotypes in society?"
                ]
            },
            {
                title: "The Most Thought-Provoking Movie You Have Seen",
                topic: "Movies & TV Shows",
                content: [
                    "What movie made you question your beliefs or view of the world?",
                    "What themes in that movie stood out the most to you?",
                    "How would you recommend it to someone who hasn’t seen it?"
                ]
            }
        ]
    }
];
const RoomPage = () => {
    const location = useLocation();
    const [users, setUsers] = useState([]);
    const { topic, language, level, roomId } = location.state || {};
    const [scenario, setScenario] = useState(null);

    useEffect(() => {
        console.log("Level:", level);
        console.log("Topic:", topic);
        const fetchUsers = async () => {
            try {
                const res = await fetch(`http://localhost:5001/api/rooms/room-users?roomId=${roomId}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error("Ошибка загрузки пользователей:", err);
            }
        };

        fetchUsers();
        if (level && topic) {
            const random = getRandomScenarioByLevelAndTopic(level, topic);
            setScenario(random);
        }
    }, [level, topic]);

    const showRandomScenario = () => {
        const random = getRandomScenarioByLevelAndTopic(level, topic);
        console.log("Random scenario returned:", random);
        setScenario(random);
    }

    function getRandomScenarioByLevelAndTopic(level, topic) {
        const levelData = scenarios.find((s) => s.level === level);

        if (!levelData || levelData.scenarios.length === 0) return null;

        const topicData = levelData.scenarios.filter((scenario) => {
            const scenarioTopic = scenario.topic?.toLowerCase().trim();
            const currentTopic = topic?.toLowerCase().trim();
            return scenarioTopic === currentTopic;
        });

        if (topicData.length === 0) return null;

        const randomScenario = levelData.scenarios[Math.floor(Math.random() * levelData.scenarios.length)];
        const randomContent = randomScenario.content[Math.floor(Math.random() * randomScenario.content.length)];

        return {
            level: levelData.level,
            topic: levelData.topic,
            title: randomScenario.title,
            content: randomContent,
        };
    }
    return (
        <div className="room-container">
            <div className="rooms-header">
                <button className="info-button">
                    <img src={aboutIcon} alt="About" />
                    <span>About</span>
                </button>

                <h1 className="room-title">"{topic || 'Room Title'}"</h1>

                <button className="exit-button">
                    <img src={exitIcon} alt="Exit" />
                    <span>Exit</span>
                </button>
            </div>

            <div className="room-controls">
                <button className="category-button">{topic || "Category"}</button>
                <div className="turn-indicator">
                    <span>Name’s</span>
                    <div className="profile-circle">
                        <img src={avatar} alt="Turn" />
                    </div>
                    <span>Turn</span>
                </div>
                <button className="level-button">{level || "Level"}</button>
            </div>

            <div className="microphone-container">
                <button className="microphone-button"><img src={mic} alt="Mic" /></button>
                <button className="subtitles-button"><img src={sub} alt="Subtitles" /></button>
            </div>

            <div className="user-list">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user.id} className="user-avatar">
                            <img src={avatar} alt={user.username} />
                            <span>{user.username}</span>
                        </div>
                    ))
                ) : (
                    <p>No users in the room</p>
                )}
            </div>
            <button onClick={showRandomScenario}>Show Scenario</button>

            {scenario && (
                <div className="mt-4 p-4 border rounded">
                    <h3 className="font-bold">{scenario.title} ({scenario.level})</h3>
                    <p>{scenario.content}</p>
                </div>
            )}
        </div>
    );
};

export default RoomPage;
