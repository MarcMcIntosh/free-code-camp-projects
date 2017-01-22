import React, { PropTypes } from 'react';
import Button from './Button';
import Constants from '../Constants';
import fillCell from '../util/fill-cell';

const { _, O, X } = Constants.PLAYER;

const Game = ({
  board,
  player,
  turn,
  onClick,
  ...props
}) => (<div {...props}>{
  board.map((d, i) => (<Button
    key={i}
    value={d}
    onClick={() => onClick(i, player)}
    disabled={d !== _ || player !== turn}
  >
    <b>{fillCell(d)}</b>
  </Button>))
}</div>);

Game.propTypes = {
  board: PropTypes.array.isRequired,
  player: PropTypes.oneOf([_, O, X]),
  turn: PropTypes.oneOf([_, O, X]),
  onClick: PropTypes.func,
};

export default Game;
