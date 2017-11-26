import { createStore, applyMiddleware, compose, combineRducers } from 'redux';
import thunk from 'redux-thunk';
import localWeather from './reducer';

const reducer = combineRducers({ localWeather });

const store = (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') ? createStore(reducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), applyMiddleware(thunk)) : createStore(reducer, applyMiddleware(thunk));

export default store;
