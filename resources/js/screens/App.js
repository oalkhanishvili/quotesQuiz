import React, {Component} from 'react';
import {connect} from 'react-redux';
import Finish from "../components/Finish";
import Home from "../components/Home";
import {fetchQuiz} from "../actions";

const initialState = {
    type: ''
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    changeQuizType(type) {
        this.props.dispatch(fetchQuiz(type));
        this.setState({
            type: type
        })
    }

    render() {
        const {quiz} = this.props;
        const {data, index} = quiz;
        if (quiz.finish) return <Finish score={quiz.score} total={quiz.data.length}/>;
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            Choose Quiz Type
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"
                               onClick={this.changeQuizType.bind(this, 'multiple')}>Multiple</a>
                            <a className="dropdown-item"
                               onClick={this.changeQuizType.bind(this, 'binary')}>Binary</a>
                        </div>
                    </div>
                    <hr/>
                    {this.state.type && <Home quiz={quiz} question={data[index]} type={this.state.type}/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    quiz: state.quiz
});

export default connect(mapStateToProps)(App);
