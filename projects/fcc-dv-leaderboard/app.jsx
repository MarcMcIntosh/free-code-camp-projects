import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Container, {
  List,
  Sort,
} from './index';
import './styles/test.scss';

const Test = () => (<Container className="mdc-theme leaderboard">
  <Sort value="recent">Recent</Sort>
  <Sort value="alltime">All Time</Sort>
  <List className="users" />
</Container>);

render(<Test />, document.getElementById('App'));
