import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
// import { ConnectedRouter } from 'react-router-redux';
import createRoutes from './routes';

const initialState = window.__INITIAL_STATE__;

const browserHistory = createHistory();
const store = configureStore(initialState);
const routes = createRoutes(store);

render(<Provider store={store}>
  <Router basename="/tribute-page" history={browserHistory}>{routes}</Router>
</Provider>, document.getElementById('app'));
