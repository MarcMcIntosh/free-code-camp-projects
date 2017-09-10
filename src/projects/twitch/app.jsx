import React from 'react';
import ReactDOM from 'react-dom';
import App, { UserList, Header } from './index';

require('./src/styles/main.scss');

const Test = () => (
  <App>
    <Header />
    <UserList />
  </App>
);

ReactDOM.render(
  <Test />,
  document.getElementById('App'),
);
