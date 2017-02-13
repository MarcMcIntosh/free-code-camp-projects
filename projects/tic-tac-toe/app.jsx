import React from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import Container, { Header, Board } from './index';

require('./src/styles/main.scss');

const App = () => (
  <Container className="tic-tac-toe">
    <Header className="tic-tac-toe__header" />
    <Board
      className="tic-tac-toe__board"
      classnames={{
        button: 'cell',
        _: '_',
        X: 'X',
        O: 'O',
      }}
    />
  </Container>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
