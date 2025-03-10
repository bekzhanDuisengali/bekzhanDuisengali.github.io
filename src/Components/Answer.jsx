import React from "react";
import "../styles/QuizPage.css";

const Answer = ({ optionText, isSelected, onClick }) => {
    return (
        <button
            className={`option ${isSelected ? "selected-option" : ""}`}
            onClick={onClick}
        >
            {optionText}
        </button>
    );
};

export default Answer;
