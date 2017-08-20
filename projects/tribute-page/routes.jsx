import React from 'react';
import { Route, Switch } from 'react-router';
import { App, Home, About } from './src/pages';

export default () => (<App>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
</App>);
