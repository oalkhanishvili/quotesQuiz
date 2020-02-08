import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitAnswer} from "../actions";

export default class Finish extends Component {
    submitAnswer(id, answer) {
        this.props.dispatch(submitAnswer(id, answer))
    }

    refreshQuiz() {
        window.location.reload(false);
    }

    render() {
        const {score, total} = this.props;
        return (
            <div className="container">
                <div className="d-flex justify-content-between m-5">

                    <h1 onClick={this.refreshQuiz}>FINISH {score + '/' + total}</h1>
                    <button type="button" onClick={this.refreshQuiz} className="btn btn-primary btn-lg">Start Again
                    </button>
                </div>
                <div className="row justify-content-center">
                    <img src="assets/vault_boy.png" alt=""/>
                </div>
            </div>
        );
    }
}
