import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {
  persistStore,
  autoRehydrate,
} from 'redux-persist';

import thunk from 'redux-thunk';
import reducer from './reducer';

/* const enhancers = (process.env.NODE_ENV !== 'production') ? compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  autoRehydrate(),
  applyMiddleware(thunk),
) : compose(autoRehydrate(), applyMiddleware(thunk));

const store = createStore(
  reducer,
  undefined,
  enhancers,
);*/


const store = (
  process.env.NODE_ENV !== 'production'
) ? compose(
  autoRehydrate(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)(createStore)(reducer) : compose(autoRehydrate(), applyMiddleware(thunk))(createStore)(reducer);

persistStore(store, {
  blacklist: ['edit'],
  keyPrefix: '_brightpurple-cakes',
});

export default store;
