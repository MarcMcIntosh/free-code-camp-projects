import React from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import Calculator, { Buttons } from './index';

// require('./src/styles/main.scss');

const App = () => (
  <Calculator><Buttons /></Calculator>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
