import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer, { initialState } from './reducer';
import { isClient, isProduction } from './env';

const preloadedState = isClient ? window.__PRELOADED_STATE__ : initialState;

if (isClient) { delete window.__PRELOADED_STATE__; }

const enhancers = (isClient && !isProduction) ? compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)) : applyMiddleware(thunk);

export default createStore(reducer, preloadedState, enhancers);
