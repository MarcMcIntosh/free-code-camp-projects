import React from 'react';
import { Router, Link, Route, browserHistory } from 'react-router';
import Gallary from './src/components/Gallary/index';
import Tribute from './src/apps/Tribute';

const App = () => (
  <div>
    <Gallary><Tribute /></Gallary>
    <Link to="tribute">Tribute</Link>
    <Tribute />
  </div>
);

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="tribute" component={Tribute} />
    </Route>
  </Router>
);

export default Routes;
