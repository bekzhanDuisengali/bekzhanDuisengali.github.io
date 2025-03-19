import React, { Component } from "react";

class Question extends Component {
    render() {
        return (
            <div className="question-section">
                <h2>Question {this.props.questionNumber}/20</h2>
                <p>{this.props.questionText}</p>
            </div>
        );
    }
}
export default Question;