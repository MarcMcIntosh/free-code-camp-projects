import React from 'react';
import {
  Route,
  IndexRoute,
  Redirect,
  Router,
  browserHistory,
} from 'react-router';
import Main from './pages/Main';
import Gallary from './components/Gallary';
import { Container } from './components/apps';
import Tribute, { task as TributeTask } from './apps/Tribute';

const Apps = (<Gallary
  apps={[
    {
      path: '/apps/tribute',
      preview: Tribute,
      info: TributeTask,
    },
  ]}
/>);

const Routes = () => (
  <Router histoy={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Apps} />
      <Route path="apps" component={Container}>
        <Redirect from="apps" to="/" />
        <Route path="tribute" component={Tribute} />
      </Route>
    </Route>
  </Router>
);

export default Routes;
