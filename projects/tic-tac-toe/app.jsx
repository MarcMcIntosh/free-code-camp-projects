import React from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import TicTacToe, { PlayerSelect, Board } from './index';

require('./src/styles/main.scss');

const App = () => (
  <TicTacToe>
    <PlayerSelect />
    <Board />
  </TicTacToe>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
