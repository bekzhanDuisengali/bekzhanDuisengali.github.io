import React, { Component } from "react";
import "../styles/QuizPage.css";
import appleIcon from "../assets/apple.png"
import aIcon from "../assets/a.png"
import catIcon from "../assets/cat.png"
import clockIcon from "../assets/clock.png"
import danceIcon from "../assets/dance.png"
import examIcon from "../assets/exam.png"
import latinIcon from "../assets/latin.png"
import liveIcon from "../assets/live.png"
import moneyIcon from "../assets/money.png"
import noteIcon from "../assets/note.png"
import pathIcon from "../assets/path.png"
import signIcon from "../assets/sign.png"
import thankIcon from "../assets/thank.png"
import tickIcon from "../assets/tick.png"
import verbIcon from "../assets/verb.png"
import {Link} from "react-router-dom";
import Question from "../Components/Question";
import Answer from "../Components/Answer";

class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            score: 0,
            selectedAnswers: [],
            questions: [
                {
                    text: "What is the correct translation of 'apple' in Spanish?",
                    image: appleIcon,
                    options: ["Manzana", "Naranja", "Pera", "Melón"],
                    correct: "Manzana",
                },
                {
                    text: "Which article is used with 'gato' (cat)?",
                    image: catIcon,
                    options: ["La", "Los", "El", "Unos"],
                    correct: "El",
                },
                {
                    text: "How to say 'Thank you' in Spanish?",
                    image: thankIcon,
                    options: ["Perdón", "Hola", "Gracias", "Por favor"],
                    correct: "Gracias",
                },
                {
                    text: "What letter is missing from the Spanish alphabet?",
                    image: aIcon,
                    options: ["Ñ", "W", "Q", "Z"],
                    correct: "W",
                },
                {
                    text: "How do you say 'My name is Anna' in Spanish?",
                    image: signIcon,
                    options: ["Soy Anna", "Me llamo Anna", "Tengo Anna", "Estoy Anna"],
                    correct: "Me llamo Anna",
                },
                {
                    text: "Choose the right option: 'Yo ___ estudiante.'",
                    image: verbIcon,
                    options: ["ser", "soy", "estás", "somos"],
                    correct: "soy",
                },
                {
                    text: "What time is used to describe the actions taking place now?",
                    image: verbIcon,
                    options: ["Presente", "Pretérito", "Futuro", "Imperfecto"],
                    correct: "Presente",
                },
                {
                    text: "What is the form of the correct verb 'hablar' in the 1st person singular (Presente)?",
                    image: verbIcon,
                    options: ["Hablo", "Hablamos", "Habla", "Hablas"],
                    correct: "Hablo",
                },
                {
                    text: "Which of these verbs is incorrect?",
                    image: danceIcon,
                    options: ["Comer", "Vivir", "Tener", "Escribir"],
                    correct: "Tener",
                },
                {
                    text: "Translate: 'She lives in Spain.'",
                    image: liveIcon,
                    options: ["Ella vives en España", "Ella vive en España", "Ella vivir en España", "Ella vivís en España"],
                    correct: "Ella vive en España",
                },
                {
                    text: "What time is used to describe habitual actions?",
                    image: tickIcon,
                    options: ["Presente", "Pretérito indefinido", "Futuro", "Condicional"],
                    correct: "Presente",
                },
                {
                    text: "Choose the correct option: 'Yesterday we ___ to the cinema.'",
                    image: pathIcon,
                    options: ["Vamos", "Fuimos", "Ir", "Iremos"],
                    correct: "Fuimos",
                },
                {
                    text: "What preposition is used to indicate the direction?",
                    image: verbIcon,
                    options: ["En", "Con", "A", "De"],
                    correct: "A",
                },
                {
                    text: "What is the form of the correct verb 'tener' in the 2nd person singular (Pretérito Indefinido)?",
                    image: verbIcon ,
                    options: ["Tenías", "Tienes", "Tuviste", "Tuvo"],
                    correct: "Tuviste",
                },
                {
                    text: "How do you translate 'I like classical music'?",
                    image: noteIcon,

                    options: ["I like classical music", "I play classical music", "I listen to classical music", "I like to play classical instruments"],
                    correct: "I like classical music",
                },
                {
                    text: "Which of these verbs is reflexive?",
                    image: verbIcon,
                    options: ["Dormir", "Comer", "Lavarse", "Beber"],
                    correct: "Lavarse",
                },
                {
                    text: "What is the correct way to say 'If I had money, I would go to Spain' (Condicional)?",
                    image: moneyIcon,
                    options: ["Si tengo dinero, iré a España", "Si tendría dinero, iría a España", "Si tuviera dinero, iría a España", "Si tuve dinero, fui a España"],
                    correct: "Si tuviera dinero, iría a España",
                },
                {
                    text: "What form of the verb 'haber' is used to form Pretérito Perfecto?",
                    image: verbIcon,
                    options: ["He", "Hay", "Hube", "Había"],
                    correct: "He",
                },
                {
                    text: "Translate: 'I have never been to Latin America.'",
                    image: latinIcon,
                    options: ["Nunca he estado en América Latina", "Nunca estuve en América Latina", "Nunca estoy en América Latina", "Nunca estaré en América Latina"],
                    correct: "Nunca he estado en América Latina",
                },
                {
                    text: "What time is used in the sentence: 'If I had studied more, I would have passed the exam'?",
                    image: examIcon,
                    options: ["Presente", "Pretérito Indefinido", "Condicional compuesto", "Pluscuamperfecto de subjuntivo"],
                    correct: "Condicional compuesto",
                },
            ],
        };
    }

    handleAnswer = (selectedOption) => {
        const {questionIndex, selectedAnswers} = this.state;

        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[questionIndex] = selectedOption;

        this.setState({
            selectedAnswers: updatedAnswers,
        });
    };

    handleNextQuestion = () => {
        const {questionIndex, questions, selectedAnswers} = this.state;

        if (questionIndex < questions.length - 1) {
            this.setState({questionIndex: questionIndex + 1});
        } else {
            let score = 0;
            questions.forEach((question, index) => {
                if (selectedAnswers[index] === question.correct) {
                    score += 1;
                }
            });

            this.setState({score, quizCompleted: true});
        }
    };


    handlePreviousQuestion = () => {
        if (this.state.questionIndex > 0) {
            this.setState({questionIndex: this.state.questionIndex - 1});
        }
    };

    render() {
        const {questionIndex, questions, selectedAnswers, quizCompleted} = this.state;

        if (quizCompleted) {
            return (
                <div className="quiz-container">
                    <h1>Quiz Completed!</h1>
                    <p>Your Score: {this.state.score} / {questions.length}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            );
        }

        const currentQuestion = questions[questionIndex];
        const selectedOption = selectedAnswers[questionIndex];

        return (
            <div className="quiz-container">
                <header className="quiz-header">
                    <h1><Link to="/" className="logo-link"> Lexio</Link></h1>
                    <nav className="navbar-quiz">
                        <a href="#create-room" className="nav-link-quiz">Create a Room</a>
                        <a href="#select-rooms" className="nav-link-quiz">Select Rooms</a>
                        <a href="#login" className="nav-link-quiz">Log In</a>
                        <button className="sign-up-quiz">Sign Up</button>
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

