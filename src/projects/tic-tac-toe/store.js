import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ticTacToe from './reducer';

const reducer = combineReducers({ ticTacToe });

const store = (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') ? createStore(reducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), applyMiddleware(thunk)) : createStore(reducer, applyMiddleware(thunk));

export default store;
