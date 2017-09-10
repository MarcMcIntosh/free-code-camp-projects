import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = (
  process.env.NODE_ENV !== 'production'
) ? createStore(reducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  applyMiddleware(thunk),
) : createStore(reducer, applyMiddleware(thunk));

export default store;
