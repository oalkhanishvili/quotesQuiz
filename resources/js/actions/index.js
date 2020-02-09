import {
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZ_PENDING,
    FETCH_QUIZ_ERROR,
    FETCH_ANSWER_SUCCESS, RELOAD_QUIZ, SET_QUIZ_TYPE
} from "../constants";

function fetchQuizSuccess(data) {
    return {type: FETCH_QUIZ_SUCCESS, payload: data};
}

function fetchQuizPending() {
    return {
        type: FETCH_QUIZ_PENDING,
    };
}

function fetchQuizError() {
    return {
        type: FETCH_QUIZ_ERROR,
    };
}
function setQuizType(type) {
    return {
        type: SET_QUIZ_TYPE,
        payload: type
    };
}
function reload() {
    return {
        type: RELOAD_QUIZ,
    };
}
export function fetchQuiz(type = '') {
    return dispatch => {
        dispatch(fetchQuizPending());
        dispatch(reload());
        dispatch(setQuizType(type));
        return axios.get('api/quote', {
            params: {
                type: type
            }
        })
            .then(res => {
                dispatch(fetchQuizSuccess(res.data.data));
                return res;
            }).catch(error => {
                dispatch(fetchQuizError());
                return error;
            });
    }
}
function fetchCheckAnswer(data) {
    return {
        type: FETCH_ANSWER_SUCCESS,
        payload: data,
    };
}
export function submitAnswer(id, answer) {
    return dispatch => {
        return axios.get('api/quote/' + id + '/check', {
            params: {
                answer: answer
            }
        })
            .then(res => {
                dispatch(fetchCheckAnswer(res.data));
                return res;
            }).catch(error => {
                dispatch(fetchQuizError());
                return error;
            });
    }
}
