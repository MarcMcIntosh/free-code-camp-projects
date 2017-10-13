import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduceReducers from 'reduce-reducers';
import { formReducer } from 'redux-form';
import reducer from './reducer';

const r = reduceReducers(reducer, { form: formReducer });

const store = (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') ? createStore(r, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), applyMiddleware(thunk)) : createStore(r, applyMiddleware(thunk));

export default store;
