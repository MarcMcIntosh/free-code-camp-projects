import React from 'react';
import {
  Route,
  IndexRoute,
  Redirect,
  Router,
  browserHistory,
} from 'react-router';
import Main from './src/pages/Main';
import Gallary from './src/components/Gallary/index';
import Container from './src/pages/apps';
import Tribute, { task as TributeTask } from './src/apps/Tribute';
import QuoteMachine, { task as QuoteMachineTask } from './src/apps/QuoteMachine';

// Local Weather
// Wikipedia
// Twitch
// Calculator
// Pomodoro
// Tic-Tac-Toe
// Simon

import TributePreview from './src/assets/tribute.png';
import PlaceHolder from './src/assets/quote.png';

const apps = [
  {
    name: 'Tribute Page',
    description: 'Free Code Camp Project',
    path: '/apps/tribute',
    preview: TributePreview,
    info: TributeTask,
  },
  {
    name: 'Random Quote Machine',
    description: 'Free Code Camp Project',
    path: '/apps/quote-machine',
    preview: PlaceHolder,
    info: QuoteMachineTask,
  },
];
const Apps = () => (<Gallary apps={apps} />);


const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Apps} />
      <Route path="apps" component={Container}>
        <Redirect from="apps" to="/" />
        <Route path="tribute" component={Tribute} />
        <Route path="quote-machine" component={QuoteMachine} />
      </Route>
    </Route>
  </Router>
);

/*
import { Router, Link, Route, browserHistory } from 'react-router';
import Gallary from './src/components/Gallary/index';
import Tribute from './src/apps/Tribute';
import TestRoute from './src/components/TestRoute';

const App = () => (
  <div>
    <Apps />
    <Link to="/tribute">Tribute</Link>
    <Link to="/test">Test Route</Link>
    <Tribute />
  </div>
);

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/tribute" component={Tribute} />
    <Route path="/test" component={TestRoute} />
  </Router>
);
*/

export default Routes;
