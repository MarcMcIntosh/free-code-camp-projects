import React from 'react';
import ReactDOM from 'react-dom';
import App, { Users } from './index';

require('./src/styles/main.scss');

const Test = () => (
  <App>
    <Users />
  </App>
);

ReactDOM.render(
  <Test />,
  document.getElementById('App'),
);
