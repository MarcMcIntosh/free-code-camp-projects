import React from 'react';
import {
  Route,
  // IndexRoute,
  Switch,
} from 'react-router';
import { App, About, Gallary } from '../app/pages';
import { Routes as Tribute } from '../../projects/tribute-page';
/*
export default () => (<Route path="/" component={App}>
  <IndexRoute component={Gallary} />
  <Route path="about" component={About} />
</Route>);
*/
export default () => (<App>
  <Switch>
    <Route exact path="/" component={Gallary} />
    <Route path="/about" component={About} />
    <Route path="/tribute-page" component={Tribute} />
  </Switch>
</App>);
