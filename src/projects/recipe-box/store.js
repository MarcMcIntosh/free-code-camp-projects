import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistStore, autoRehydrate } from 'redux-persist';

import thunk from 'redux-thunk';
import reducer from './reducer';

const r = combineReducers({
  recipeBox: reducer,
  form: formReducer,
});

const store = (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') ? compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk), autoRehydrate())(createStore)(r) : compose(applyMiddleware(thunk), autoRehydrate())(createStore)(r);

persistStore(store, {
  blacklist: ['form'],
  whitelist: ['recipeBox.recipes'],
  keyPrefix: '_recipes',
});
/*
const store = (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') ? createStore(r, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), applyMiddleware(thunk)) : createStore(r, applyMiddleware(thunk));
*/

export default store;
