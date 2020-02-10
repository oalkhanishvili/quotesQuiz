import {
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZ_PENDING,
    NEXT_QUESTION,
    FETCH_ANSWER_SUCCESS,
    RELOAD_QUIZ,
    SET_QUIZ_TYPE, FETCH_ANSWER_PENDING
} from '../constants';

const initialState = {
    type: '',
    index: 0,
    data: [],
    pending: true,
    finish: false,
    score: 0,
    message: '',
};

const quiz = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUIZ_TYPE:
            return {
                ...state,
                type: action.payload
            };
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
                pending: false,
                score: state.score + action.payload.correct
            };
        case FETCH_ANSWER_PENDING:
            return {
                ...state,
                pending: true,
            };
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
