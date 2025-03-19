import React, { Component } from "react";
import "../styles/QuizPage.css";
import {Link} from "react-router-dom";
import Question from "../Components/Question";
import Answer from "../Components/Answer";

class QuizPage extends Component {
    constructor(props) {
        super(props);

        const selectedLanguage = localStorage.getItem("selectedLanguage") || "Spanish";

        const questionsByLanguage = {
            English: [
                {
                    text: "What does 'Hello' mean?",
                    options: ["Goodbye", "Hi", "Thank you", "Good morning"],
                    correct: "Hi"
                },
                {
                    text: "Which article is used with 'dog'?",
                    options: ["A", "An", "The", "No article"],
                    correct: "A"
                },
                {
                    text: "How do you say 'Thanks' in English?",
                    options: ["Please", "Hello", "Thank you", "Sorry"],
                    correct: "Thank you"
                },
                {
                    text: "Which verb means 'to be'?",
                    options: ["Do", "Be", "Have", "Go"],
                    correct: "Be"
                },
                {
                    text: "How do you say 'My name is Anna.' in English?",
                    options: ["I am Anna", "My name is Anna", "I have Anna", "I’m Anna"],
                    correct: "My name is Anna"
                },
                {
                    text: "Choose the correct option: 'I ___ a student.'",
                    options: ["is", "am", "are", "be"],
                    correct: "am"
                },
                {
                    text: "Which tense is used for actions happening now?",
                    options: ["Past Simple", "Present Continuous", "Future Simple", "Present Perfect"],
                    correct: "Present Continuous"
                },
                {
                    text: "What is the correct form of 'to go' in the 3rd person singular (Present Simple)?",
                    options: ["Go", "Goes", "Went", "Gone"],
                    correct: "Goes"
                },
                {
                    text: "Which of these verbs is irregular?",
                    options: ["Walk", "Speak", "Talk", "Look"],
                    correct: "Speak"
                },
                {
                    text: "Translate: 'She lives in England.'",
                    options: ["She live in England", "She lives in England", "She living in England", "She lived in England"],
                    correct: "She lives in England"
                },
                {
                    text: "Which tense is used for habitual actions?",
                    options: ["Present Simple", "Past Continuous", "Future Simple", "Present Perfect"],
                    correct: "Present Simple"
                },
                {
                    text: "Choose the correct option: 'Yesterday we ___ to the cinema.'",
                    options: ["go", "went", "gone", "going"],
                    correct: "went"
                },
                {
                    text: "Which preposition is used for direction?",
                    options: ["In", "On", "To", "At"],
                    correct: "To"
                },
                {
                    text: "What is the correct form of 'to have' in the 2nd person singular (Past Simple)?",
                    options: ["Have", "Has", "Had", "Having"],
                    correct: "Had"
                },
                {
                    text: "What does 'I like classical music' mean?",
                    options: ["I enjoy classical music", "I play classical music", "I listen to classical music", "I love playing classical instruments"],
                    correct: "I enjoy classical music"
                },
                {
                    text: "Which of these verbs is reflexive?",
                    options: ["Sleep", "Wash myself", "Eat", "Read"],
                    correct: "Wash myself"
                },
                {
                    text: "How do you correctly say 'If I had the money, I would go to England.' (Second Conditional)?",
                    options: ["If I have money, I will go to England", "If I had money, I would go to England", "If I had had money, I would have gone to England", "If I had money, I went to England"],
                    correct: "If I had money, I would go to England"
                },
                {
                    text: "Which form of 'to have' is used to form the Present Perfect?",
                    options: ["Have/Has", "Had", "Having", "Has been"],
                    correct: "Have/Has"
                },
                {
                    text: "Translate: 'I've never been to America.'",
                    options: ["I have never been to America", "I never was in America", "I am never in America", "I will never be in America"],
                    correct: "I have never been to America"
                },
                {
                    text: "Which tense is used in the sentence: 'If I had studied more, I would have passed the exam'?",
                    options: ["Past Simple", "Past Perfect", "Third Conditional", "Future Perfect"],
                    correct: "Third Conditional"
                }
            ],
            French: [
                {
                    text: "What does 'Bonjour' mean?",
                    options: ["Goodbye", "Hello", "Thank you", "Good morning"],
                    correct: "Hello"
                },
                {
                    text: "Which article is used with 'chien' (dog)?",
                    options: ["Un", "Une", "Le", "La"],
                    correct: "Un"
                },
                {
                    text: "How do you say 'Thank you' in French?",
                    options: ["S'il vous plaît", "Bonjour", "Merci", "Désolé"],
                    correct: "Merci"
                },
                {
                    text: "Which verb means 'to be' in French?",
                    options: ["Avoir", "Être", "Aller", "Faire"],
                    correct: "Être"
                },
                {
                    text: "How do you say 'My name is Anna' in French?",
                    options: ["Je suis Anna", "Mon nom est Anna", "Je m'appelle Anna", "J'ai Anna"],
                    correct: "Je m'appelle Anna"
                },
                {
                    text: "Choose the correct option: 'Je ___ un étudiant.' (I am a student.)",
                    options: ["es", "suis", "est", "êtes"],
                    correct: "suis"
                },
                {
                    text: "Which tense is used for actions happening now in French?",
                    options: ["Passé Composé", "Présent", "Futur Simple", "Imparfait"],
                    correct: "Présent"
                },
                {
                    text: "What is the correct form of 'aller' (to go) in the 3rd person singular (Présent)?",
                    options: ["Va", "Vas", "Allons", "Allez"],
                    correct: "Va"
                },
                {
                    text: "Which of these verbs is irregular in French?",
                    options: ["Parler", "Finir", "Manger", "Venir"],
                    correct: "Venir"
                },
                {
                    text: "Translate: 'Elle habite en France.'",
                    options: ["She lives in France", "She lived in France", "She is living in France", "She will live in France"],
                    correct: "She lives in France"
                },
                {
                    text: "Which tense is used for habitual actions in French?",
                    options: ["Présent", "Passé Composé", "Futur Simple", "Conditionnel"],
                    correct: "Présent"
                },
                {
                    text: "Choose the correct option: 'Hier, nous ___ au cinéma.' (Yesterday, we went to the cinema.)",
                    options: ["allons", "sommes allés", "alliez", "irons"],
                    correct: "sommes allés"
                },
                {
                    text: "Which preposition is used to indicate direction in French?",
                    options: ["Dans", "Sur", "À", "De"],
                    correct: "À"
                },
                {
                    text: "What is the correct form of 'avoir' (to have) in the 2nd person singular (Passé Composé)?",
                    options: ["Ai", "As", "A", "Avais"],
                    correct: "As"
                },
                {
                    text: "What does 'J'aime la musique classique' mean?",
                    options: ["I enjoy classical music", "I play classical music", "I listen to classical music", "I love playing classical instruments"],
                    correct: "I enjoy classical music"
                },
                {
                    text: "Which of these verbs is reflexive in French?",
                    options: ["Dormir", "Se laver", "Manger", "Lire"],
                    correct: "Se laver"
                },
                {
                    text: "How do you correctly say 'If I had money, I would go to France' (Second Conditional) in French?",
                    options: ["Si j'ai de l'argent, j'irai en France", "Si j'avais de l'argent, j'irais en France", "Si j'avais eu de l'argent, je serais allé en France", "Si j'ai de l'argent, je vais en France"],
                    correct: "Si j'avais de l'argent, j'irais en France"
                },
                {
                    text: "Which form of 'avoir' is used to form the Passé Composé?",
                    options: ["Avoir", "Être", "Ai/As", "A"],
                    correct: "Avoir"
                },
                {
                    text: "Translate: 'Je n'ai jamais été en Amérique.'",
                    options: ["I have never been to America", "I never was in America", "I am never in America", "I will never be in America"],
                    correct: "I have never been to America"
                },
                {
                    text: "Which tense is used in the sentence: 'Si j'avais étudié plus, j'aurais réussi l'examen'?",
                    options: ["Présent", "Passé Composé", "Plus-que-parfait", "Conditionnel Passé"],
                    correct: "Conditionnel Passé"
                }
            ],
            Spanish: [
                {
                    text: "What is the correct translation of 'apple' in Spanish?",
                    options: ["Manzana", "Naranja", "Pera", "Melón"],
                    correct: "Manzana",
                },
                {
                    text: "Which article is used with 'gato' (cat)?",
                    options: ["La", "Los", "El", "Unos"],
                    correct: "El",
                },
                {
                    text: "How to say 'Thank you' in Spanish?",
                    options: ["Perdón", "Hola", "Gracias", "Por favor"],
                    correct: "Gracias",
                },
                {
                    text: "What letter is missing from the Spanish alphabet?",
                    options: ["Ñ", "W", "Q", "Z"],
                    correct: "W",
                },
                {
                    text: "How do you say 'My name is Anna' in Spanish?",
                    options: ["Soy Anna", "Me llamo Anna", "Tengo Anna", "Estoy Anna"],
                    correct: "Me llamo Anna",
                },
                {
                    text: "Choose the right option: 'Yo ___ estudiante.'",
                    options: ["ser", "soy", "estás", "somos"],
                    correct: "soy",
                },
                {
                    text: "What time is used to describe the actions taking place now?",
                    options: ["Presente", "Pretérito", "Futuro", "Imperfecto"],
                    correct: "Presente",
                },
                {
                    text: "What is the form of the correct verb 'hablar' in the 1st person singular (Presente)?",
                    options: ["Hablo", "Hablamos", "Habla", "Hablas"],
                    correct: "Hablo",
                },
                {
                    text: "Which of these verbs is incorrect?",
                    options: ["Comer", "Vivir", "Tener", "Escribir"],
                    correct: "Tener",
                },
                {
                    text: "Translate: 'She lives in Spain.'",
                    options: ["Ella vives en España", "Ella vive en España", "Ella vivir en España", "Ella vivís en España"],
                    correct: "Ella vive en España",
                },
                {
                    text: "What time is used to describe habitual actions?",
                    options: ["Presente", "Pretérito indefinido", "Futuro", "Condicional"],
                    correct: "Presente",
                },
                {
                    text: "Choose the correct option: 'Ayer nosotros ___ al cine.'",
                    options: ["Vamos", "Fuimos", "Ir", "Iremos"],
                    correct: "Fuimos",
                },
                {
                    text: "What preposition is used to indicate the direction?",
                    options: ["En", "Con", "A", "De"],
                    correct: "A",
                },
                {
                    text: "What is the form of the correct verb 'tener' in the 2nd person singular (Pretérito Indefinido)?",
                    options: ["Tenías", "Tienes", "Tuviste", "Tuvo"],
                    correct: "Tuviste",
                },
                {
                    text: "How do you translate 'Me gusta la música clásica'?",
                    options: ["I like classical music", "I play classical music", "I listen to classical music", "I like to play classical instruments"],
                    correct: "I like classical music",
                },
                {
                    text: "Which of these verbs is reflexive?",
                    options: ["Dormir", "Comer", "Lavarse", "Beber"],
                    correct: "Lavarse",
                },
                {
                    text: "What is the correct way to say 'If I had money, I would go to Spain' (Condicional)?",
                    options: ["Si tengo dinero, iré a España", "Si tendría dinero, iría a España", "Si tuviera dinero, iría a España", "Si tuve dinero, fui a España"],
                    correct: "Si tuviera dinero, iría a España",
                },
                {
                    text: "What form of the verb 'haber' is used to form Pretérito Perfecto?",
                    options: ["He", "Hay", "Hube", "Había"],
                    correct: "He",
                },
                {
                    text: "Translate: 'I've never been to Latin America.'",
                    options: ["Nunca he estado en América Latina", "Nunca estuve en América Latina", "Nunca estoy en América Latina", "Nunca estaré en América Latina"],
                    correct: "Nunca he estado en América Latina",
                },
                {
                    text: "What time is used in the sentence: 'Si hubiera estudiado más, habría aprobado el examen'?",
                    options: ["Presente", "Pretérito Indefinido", "Condicional compuesto", "Pluscuamperfecto de subjuntivo"],
                    correct: "Condicional compuesto",
                }
            ],
        };

        this.state = {
            questionIndex: 0,
            score: 0,
            selectedAnswers: [],
            selectedLanguage: selectedLanguage,
            questions: questionsByLanguage[selectedLanguage] || [],
        };
    }



    handleAnswer = (selectedOption) => {
        this.setState((prevState) => {
            const updatedAnswers = {
                ...prevState.selectedAnswers,
                [prevState.questionIndex]: selectedOption,
            };
            console.log("Updated Answers:", updatedAnswers);
            return { selectedAnswers: updatedAnswers };
        });
    };

    calculateScore = () => {
        let totalScore = 0;

        console.log("Final Answers:", this.state.selectedAnswers);

        if (!this.state.questions || this.state.questions.length === 0) {
            return 0;
        }

        this.state.questions.forEach((question, index) => {
            const selectedAnswer = this.state.selectedAnswers[index] ?? null;
            console.log(`Q${index + 1}: Selected = ${selectedAnswer}, Correct = ${question.correctAnswer}`);

            if (selectedAnswer && selectedAnswer === question.correctAnswer) {
                if (index < 5) totalScore += 1;
                else if (index < 10) totalScore += 2;
                else if (index < 15) totalScore += 3;
                else totalScore += 5;
            }
        });

        console.log("Total Score:", totalScore);
        return totalScore;
    };





    determineLevel = (score) => {
        if (score <= 7) return "Beginner";
        if (score <= 15) return "Elementary";
        if (score <= 23) return "Pre-Intermediate";
        if (score <= 31) return "Intermediate";
        if (score <= 39) return "Upper-Intermediate";
        return "Advanced";
    };

    handleNextQuestion = () => {
        if (this.state.questionIndex === this.state.questions.length - 1) {
            const finalScore = this.calculateScore();
            this.setState({ score: finalScore, quizCompleted: true });
        } else {
            this.setState((prevState) => ({
                questionIndex: prevState.questionIndex + 1,
            }));
        }
    };

    handlePreviousQuestion = () => {
        this.setState((prevState) => ({
            questionIndex: prevState.questionIndex > 0 ? prevState.questionIndex - 1 : 0,
        }));
    };
    componentDidMount() {
        fetch("/api/questions")
            .then(response => response.json())
            .then(data => this.setState({ questions: data }))
            .catch(error => console.error("Error loading questions:", error));
    }


    render() {
        const { questionIndex, quizCompleted, score } = this.state;
        const { questions } = this.state;


        if (quizCompleted) {
            const level = this.determineLevel(score);
            return (
                <div className="quiz-container">
                    <h1>Quiz Completed!</h1>
                    <p>Your Score: {score} / {questions.length}</p>
                    <p>Your English Level: <strong>{level}</strong></p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            );
        }

        const currentQuestion = questions[questionIndex];
        const selectedOption = this.state.selectedAnswers[questionIndex];


        console.log("Props Questions:", this.props.questions);
        console.log("State Questions:", this.state.questions);

        return (
            <div className="quiz-container">
                <header className="quiz-header">
                    <h1><Link to="/" className="logo-link"> Lexio</Link></h1>
                    <nav className="navbar-quiz">
                        <a href="/room" className="nav-link-quiz">Select Rooms</a>
                        <a href="/login" className="nav-link-quiz">Log In</a>
                        <button className="sign-up-quiz"><a href="/signup">Sign Up</a></button>
                    </nav>
                </header>
                <main className="quiz-content">
                    <div className="question-container">
                        <Question
                            questionNumber={questionIndex + 1}
                            questionText={currentQuestion.text}
                            imageSrc={currentQuestion.image}
                        />

                        <div className="quiz-navigation">
                            <button
                                className="previous-button"
                                onClick={this.handlePreviousQuestion}
                                disabled={questionIndex === 0}
                            >
                                Previous
                            </button>
                            <button
                                className="next-button"
                                onClick={this.handleNextQuestion}
                            >
                                {questionIndex === questions.length - 1 ? "Finish" : "Next"}
                            </button>
                        </div>
                    </div>

                    <div className="answer-container">
                        <div className="quiz-options">
                            {currentQuestion.options.map((option, index) => (
                                <Answer
                                    key={index}
                                    optionText={option}
                                    isSelected={selectedOption === option}
                                    onClick={() => this.handleAnswer(option)}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default QuizPage;