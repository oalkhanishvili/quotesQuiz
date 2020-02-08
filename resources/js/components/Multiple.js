import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitAnswer} from "../actions";

class Multiple extends Component {
    submitAnswer(id, answer) {
        this.props.dispatch(submitAnswer(id, answer))
    }
    render() {
        const {quiz} = this.props;
        return (
            <div className="list-group">
                {
                    quiz.answers.map((answer) =>
                        <a className="list-group-item list-group-item-action" key={answer.id}
                           type="button"
                           onClick={this.submitAnswer.bind(
                               this,
                               quiz.id,
                               answer.id
                           )}
                        >
                            {answer.answer}
                        </a>
                    )
                }
            </div>
        );
    }
}

export default connect()(Multiple);
