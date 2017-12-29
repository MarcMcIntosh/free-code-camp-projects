import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { Router } from 'react-router';
import { Router } from 'react-router/es';

import createHistory from 'history/createBrowserHistory';
// import { ConnectedRouter } from 'react-router-redux';
import createRoutes from '../common/routes';
import configureStore from '../common/configureStore';

const initialState = window.__INITIAL_STATE__;


const browserHistory = createHistory();

// const store = configureStore(initialState, browserHistory);
const store = configureStore(initialState);
// const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

render(<Provider store={store}>
  <Router history={browserHistory}>{routes}</Router>
</Provider>, document.getElementById('app'));
