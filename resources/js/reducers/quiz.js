import {FETCH_QUIZ_SUCCESS, FETCH_QUIZ_PENDING, NEXT_QUESTION, FETCH_ANSWER_SUCCESS, RELOAD_QUIZ} from '../constants';

const initialState = {
    index: 0,
    data: [],
    pending: true,
    finish: false,
    score: 0,
    message: '',
};

const quiz = (state = initialState, action) => {
    switch (action.type) {
        case RELOAD_QUIZ:
            return initialState;
        case NEXT_QUESTION:
            return {
                ...state,
                finish: state.data.length === state.index + 1,
                index: state.index + 1,
                message: '',
            };
        case FETCH_ANSWER_SUCCESS:
            return {
                ...state,
                message: {text: action.payload.message, status: action.payload.correct},
                score: state.score + action.payload.correct
            }
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload,
            };
        case FETCH_QUIZ_PENDING:
            return {
                ...state,
                pending: true,
            };
        default:
            return state
    }
};
export default quiz
