import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {
  persistStore,
  autoRehydrate,
} from 'redux-persist';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import reducer from './reducer';

const r = combineReducers({
  recipeBox: reducer,
  form: formReducer,
});

const store = (typeof window !== 'undefined' &&
  process.env.NODE_ENV !== 'production'
) ? compose(autoRehydrate(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))(createStore)(r) : compose(autoRehydrate(), applyMiddleware(thunk))(createStore)(r);

persistStore(store, {
  whitelist: ['recipeBox'],
  keyPrefix: '_recipe-box',
});

export default store;
