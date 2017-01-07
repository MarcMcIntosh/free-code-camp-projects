import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = (process.env.NODE_ENV !== 'production') ? createStore(reducer, applyMiddleware(thunk)) : createStore(reducer, compose(applyMiddleware(thunk,
  window.window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())),
);
export default store;
