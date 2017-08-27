import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { renderRoutes } from 'react-router-config';
import routes from '../common/routes';

const history = createHistory();

const app = (<BrowserRouter history={history}>{renderRoutes(routes)}</BrowserRouter>);
// const app = () => (<h1>Hello</h1>);

render(app, document.getElementById('app'));
