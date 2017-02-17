import { createStore, applyMiddleware, compose } from 'redux';
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

const store = createStore(reducer, undefined, enhancers);
persistStore(store, { keyPrefix: '_recipes' });

export default store;
