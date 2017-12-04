import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import leaderBoard from './reducer';

const r = combineReducers({ leaderBoard });
const store = (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') ? createStore(r, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), applyMiddleware(thunk)) : createStore(r, applyMiddleware(thunk));

export default store;