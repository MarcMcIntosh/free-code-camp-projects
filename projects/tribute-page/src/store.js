import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


const store = createStore(reducer, undefined, compose(
  applyMiddleware(thunk),
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
