import React, {Component} from 'react';
import {submitAnswer} from "../actions";

export default class Quote extends Component {
    submitAnswer(id, answer) {
        this.props.dispatch(submitAnswer(id, answer))
    }
    render() {
        const {question} = this.props;
        return (
            <div>
                <p className="h5">Who sad that?</p>
                <div className="alert alert-secondary" role="alert">
                    {question}
                </div>
            </div>
        );
    }
}
