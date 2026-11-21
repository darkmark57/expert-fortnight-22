import React, { Component } from "react"
import style from "../styles/components/TestQuestion.module.scss"

export default class TestQuestion extends Component {
    render() {
        return (
            <div className={style.question}>
                <h2>Question {this.props.questionId}: {this.props.questionText}</h2>
                <ul>
                    {this.props.answers.map((question, i) => (
                        <li key={i}>
                            <input type="radio"
                                name="answer"
                                id={"answer_" + i}
                                value={question}
                            />
                            <label htmlFor={"answer_" + i}> {question}</label>
                        </li>))}

                </ul>
                <button>Submit</button>
            </div>
        )
    }
}
