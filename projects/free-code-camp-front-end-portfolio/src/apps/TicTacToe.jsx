import React from 'react';
import Container, {
  Header,
  Board,
  task,
} from '../../lib/tic-tac-toe';
import './TicTacToe.scss';

const TicTacToe = () => (
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

export default TicTacToe;
export { task };
