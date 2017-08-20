import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, About } from './src/pages';
import App from './src/containers/App';

export default () => (<App>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
</App>);
