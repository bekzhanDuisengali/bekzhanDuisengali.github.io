import React, { Component } from "react";

class Question extends Component {
    render() {
        return (
            <div className="question-section">
                <h2>Question {this.props.questionNumber}/20</h2>
                <p>{this.props.questionText}</p>
                <img
                    src={this.props.imageSrc}
                    alt="question-illustration"
                    className="question-image"
                />
            </div>
        );
    }
}
export default Question;