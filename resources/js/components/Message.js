import React, {Component} from 'react';
import {submitAnswer} from "../actions";

export default class Message extends Component {
    render() {
        const {message, status} = this.props;
        return (
            <div className={status ? "alert alert-success" : "alert alert-danger"} role="alert">
                {message}
            </div>
        );
    }
}
