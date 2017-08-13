import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { isClient, isDebug } from './env';

const DEFAULT_STATE = { fetching: false };

function fetchingReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}

const rootReducer = combineReducers({
  fetching: fetchingReducer,
});

export default function configureStore(initialState) {
  // Installs hooks that always keep react-router and redux store in sync
  const middleware = [
    thunk,
    // routerMiddleware(history)
  ];
  let store;

  if (isClient && isDebug) {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleware),
      typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), f => f));
  }
  /*
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  */
  return store;
}
