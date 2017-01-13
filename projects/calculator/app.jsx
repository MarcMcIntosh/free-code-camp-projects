import React from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import Calculator, { Buttons, Display, ErrorMessage } from './index';

require('./src/styles/main.scss');

const App = () => (
  <Calculator>
    <ErrorMessage />
    <Display />
    <Buttons />
  </Calculator>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
