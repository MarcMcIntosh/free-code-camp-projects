import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer, { DEFAULT_STATE } from './reducer';

const store = (initialState = DEFAULT_STATE) => createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
