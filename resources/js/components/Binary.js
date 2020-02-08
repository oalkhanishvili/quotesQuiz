import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitAnswer} from "../actions";

class Binary extends Component {
    submitAnswer(id, answer) {
        this.props.dispatch(submitAnswer(id, answer))
    }
    render() {
        const {quiz} = this.props;
        return (
            <div>

                        <div>
                            { quiz.answers[0].answer}
                        </div>


                <div className='d-flex justify-content-between mt-3'>
                    <button type="button"
                            onClick={this.submitAnswer.bind(
                                this,
                                quiz.id,
                                1
                            )}
                            className="btn btn-success">YES</button>
                    <button type="button"
                            onClick={this.submitAnswer.bind(
                                this,
                                quiz.id,
                                0
                            )}
                            className="btn btn-danger">NO</button>
                </div>
            </div>
        );
    }
}

export default connect()(Binary);
