import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchQuiz, submitAnswer} from "../actions";
import Loader from 'react-loader';
import {FETCH_QUIZ_PENDING, NEXT_QUESTION, QUIZ_TYPE_BINARY, QUIZ_TYPE_MULTIPLE} from "../constants";
import Binary from "./Binary";
import Multiple from "./Multiple";
import Quote from "./Quote";
import Message from "./Message";


class Home extends Component {

    nextQuestion() {
        this.props.dispatch({
            type: NEXT_QUESTION
        });
    }

    componentDidMount() {
        const {type} = this.props;
        if (type.type) {
            this.props.dispatch(fetchQuiz(type));
        }
    }

    submitAnswer(id, answerId) {
        this.props.dispatch(submitAnswer(id, answerId))
    }
    calculateProgress() {
        const {quiz} = this.props;
        return (quiz.index / quiz.data.length) * 100 + '%';
    }
    changeQuizType (type)  {
        this.props.dispatch(fetchQuiz(type));
        this.setState({
            type: type
        })
    }
    render() {
        const {quiz, question, type} = this.props;
        if (quiz.pending) return <Loader/>;
        return (

            <div className="card">
                <div className="card-header">
                    Quiz Type: <span style={{textTransform: 'capitalize'}}>{type}</span>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="100"
                             style={{width: this.calculateProgress()}}
                             aria-valuemax="100" />
                    </div>
                </div>
                <div className="card-body">

                    {/*QUIZ BLOCK*/}
                    {!quiz.message && <div className="quiz-body">
                        <Quote question={question.quote}/>
                        {type === QUIZ_TYPE_MULTIPLE && <Multiple quiz={question}/>}
                        {type === QUIZ_TYPE_BINARY && <Binary quiz={question}/>}
                    </div>}

                    {/*MESSAGE BLOCK*/}
                    {quiz.message &&
                    <div>
                        <Message message={quiz.message.text} status={quiz.message.status}/>
                        <button type="button" className="btn btn-primary" onClick={this.nextQuestion.bind(this)}>
                            Next
                        </button>
                    </div>
                    }
                </div>
            </div>
        );
    }
}


export default connect()(Home);
