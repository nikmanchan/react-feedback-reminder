import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';


function* rootSaga() {
    yield takeEvery('GET_FEEDBACK', getFeedback);
    yield takeEvery('POST_FEEDBACK', postFeedback);
}

function* getFeedback(action) {
    try {
        const feedback = yield call(axios.get, '/api/feedback');
        yield put({ type: 'SET_FEEDBACK', payload: feedback.data });
    } catch (error) {
        console.log('error getting feedback:', error);

    }
}

function* postFeedback(action) {
    try {
        yield call(axios.post, '/api/feedback', action.payload);
        yield put({ type: 'GET_FEEDBACK' });
    } catch (error) {
        console.log('error posting feedback:', error);
    }
  }

const sagaMiddleware = createSagaMiddleware();

const feedback = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEEDBACK':
            return [...state, { ...action.payload, }];
        case 'CLEAR_FEEDBACK':
            return state = [];
        case 'SET_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
}


const allReducers = combineReducers({
    feedback,
})

const store = createStore(
    allReducers,
    applyMiddleware(
        logger,
        sagaMiddleware,
      )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
