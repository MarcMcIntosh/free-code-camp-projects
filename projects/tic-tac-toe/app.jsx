import React from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import TicTacToe, { Board, PlayerSelect } from './index';

require('./src/styles/main.scss');

const App = () => (
  <TicTacToe>
    <Board />
    <PlayerSelect />
  </TicTacToe>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
