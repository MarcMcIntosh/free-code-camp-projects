import {
  createStore,
  applyMiddleware,
  compose,
 } from 'redux';
import reduceReducers from 'reduce-reducers';
import { reducer as formReducer } from 'redux-form';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer';

const enhancers = (
  process.env.NODE_ENV !== 'production'
) ? compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
  autoRehydrate(),
) : compose(applyMiddleware(thunk), autoRehydrate());

const reducers = reduceReducers(reducer, formReducer);

const store = createStore(reducers, undefined, enhancers);
persistStore(store, { keyPrefix: '_recipes' });

export default store;
