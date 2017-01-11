import React from 'react';
import ReactDOM from 'react-dom';
import App, { UserList } from './index';

require('./src/styles/main.scss');

const Test = () => (
  <App>
    <UserList />
  </App>
);

ReactDOM.render(
  <Test />,
  document.getElementById('App'),
);
