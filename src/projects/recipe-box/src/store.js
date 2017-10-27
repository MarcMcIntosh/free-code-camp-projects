import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer';


const store = (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
) ? compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk), autoRehydrate())(createStore)(reducer) : compose(applyMiddleware(thunk), autoRehydrate())(createStore)(reducer);

persistStore(store, {
  blacklist: ['edit'],
  keyPrefix: '_recipes',
});

export default store;
