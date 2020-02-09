import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import quiz from '../reducers';
import App from './App';
import thunk from 'redux-thunk';
import {loadState, saveState} from "../store/localStorage";

const persistedState = loadState();
const store = createStore(quiz, persistedState, applyMiddleware(thunk));
store.subscribe(() => {
    saveState(store.getState());
});
if (document.getElementById('quiz')) {
    ReactDOM.render(
            <Provider store={store}><App /></Provider>,
        document.getElementById('quiz')
    );
}
