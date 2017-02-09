import React from 'react';
import Container, {
  Header,
  Board,
  task,
} from '../../lib/tic-tac-toe';
import './TicTacToe.scss';

const TicTacToe = () => (
  <Container className="tic-tac-toe">
    <Header className="header" />
    <Board />
  </Container>
);

export default TicTacToe;
export { task };
