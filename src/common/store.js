import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer, { initialState } from './reducer';
import { isClient, isProduction } from './env';

// const preloadedState = isClient ? window.__PRELOADED_STATE__ : initialState;
// if (isClient) { delete window.__PRELOADED_STATE__; }

const enhancers = (isClient && !isProduction) ? compose(autoRehydrate(), applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) : compose(autoRehydrate(), applyMiddleware(thunk));

const store = createStore(reducer, initialState, enhancers);

if (isClient) {
  persistStore(store, { whitelist: ['recipeBox', 'app'], keyPrefix: '_marcmcintosh' });
}

export default store;
