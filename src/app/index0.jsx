import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../common/routes';


const App = (<BrowserRouter>
  {renderRoutes(routes)}
</BrowserRouter>);

render(App, document.getElementById('app'));
