import React, { Component } from 'react';
import QuizQuestions from './QuizQuestions';
import { loadQuestions } from '../helpers/QuestionsHelper';
import Hud from './HudPanel';
import EndQuizMenu from './EndQuizMenu';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
            loading: true,
            score: 0,
            questionNumber: 0,
            done: false
        };
    }
    async componentDidMount() {
        try {
            const questions = await loadQuestions();
            this.setState(
                {
                    questions
                },
                () => {
                    this.changeQuestion();
                }
            );
        } catch (err) {
            console.error(err);
        }
    }

    changeQuestion = (bonus = 0) => {
        if (this.state.questions.length === 0) {
            return this.setState((prevState) => ({
                done: true,
                score: prevState.score + bonus
            }));
        }

        const randomQuestionIndex = Math.floor(
            Math.random() * this.state.questions.length
        );
        const currentQuestion = this.state.questions[randomQuestionIndex];
        const remainingQuestions = [...this.state.questions];
        remainingQuestions.splice(randomQuestionIndex, 1);

        this.setState((prevState) => ({
            questions: remainingQuestions,
            currentQuestion,
            loading: false,
            score: prevState.score + bonus,
            questionNumber: prevState.questionNumber + 1
        }));
    };

    render() {
        const {
            loading,
            done,
            score,
            currentQuestion,
            questionNumber
        } = this.state;
        return (
            <>
                {!loading && !done && currentQuestion && (
                    <div className='Game'>
                        <Hud score={score} questionNumber={questionNumber} />
                        <div className='question'>
                            <QuizQuestions question={currentQuestion}changeQuestion={this.changeQuestion}/>
                        </div>               
                    </div>
                )}

                {done && <EndQuizMenu score={score} />}
            </>
        );
    }
}
