import React, { PropTypes } from 'react';
import Row from './Row';
import Col from './Col';
import Cell from './Cell';
import fillCell from '../util/fill-cell';

const Game = ({
  board,
  player,
  turn,
  onClick,
  ...props
}) => (<tbody {...props}>{
  board.map((row, i) => (<Row key={i}>{
    row.map((col, ii) => (<Col key={ii}><Cell
      row={i} col={ii}
      onClick={() => onClick(i, ii, player)}
      disabled={player === null || col !== null || turn !== player}
    >{fillCell(col)}</Cell></Col>))
  }</Row>))
}</tbody>);

Game.propTypes = {
  board: PropTypes.array.isRequired,
  player: PropTypes.bool,
  turn: PropTypes.turn,
  onClick: PropTypes.func,
};

export default Game;
