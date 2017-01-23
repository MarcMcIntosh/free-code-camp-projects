import React from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import TicTacToe, { Header, Board } from './index';

require('./src/styles/main.scss');

const App = () => (
  <TicTacToe className="TicTacToe">
    <Header className="header" />
    <Board />
  </TicTacToe>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
