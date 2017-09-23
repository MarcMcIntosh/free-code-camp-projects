import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { renderRoutes } from 'react-router-config';
// import { MuiThemeProvider } from 'material-ui/styles';
import routes from '../common/routes';
// import theme from '../common/theme';
import './styles/index.scss';

const history = createHistory();

const App = (<BrowserRouter history={history}>{renderRoutes(routes)}</BrowserRouter>);

render(App, document.getElementById('app'));
