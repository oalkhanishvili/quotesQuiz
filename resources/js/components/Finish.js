import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchQuiz, submitAnswer} from "../actions";

class Finish extends Component {
    refreshQuiz() {
        this.props.dispatch(fetchQuiz());
    }

    render() {
        const {score, total} = this.props;
        return (
            <div className="container">
                <div className="d-flex justify-content-between m-5">

                    <h1 onClick={this.refreshQuiz}>FINISH {score + '/' + total}</h1>
                    <button type="button" onClick={this.refreshQuiz.bind(this)} className="btn btn-primary btn-lg">Start Again
                    </button>
                </div>
                <div className="row justify-content-center">
                    <img src="assets/vault_boy.png" alt=""/>
                </div>
            </div>
        );
    }
}

export default connect()(Finish);
