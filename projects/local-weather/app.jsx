import React from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import App from './index';

require('./src/styles/main.scss');

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
