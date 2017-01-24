import React from 'react';
import ReactDOM from 'react-dom';
import Simon, { KeyBoard } from './index';

require('./src/styles/main.scss');

const App = () => (<Simon><KeyBoard /></Simon>);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
