import React, { PropTypes } from 'react';
import Button from './Button';
import Constants from '../Constants';
// import fillCell from '../util/fill-cell';

const { _, O, X } = Constants.PLAYER;

const Game = ({
  board,
  player,
  turn,
  onClick,
  done,
  ...props
}) => (<div {...props}>{
  board.map((d, i) => (<Button
    key={i}
    value={i}
    onClick={onClick}
    disabled={!done && (d !== _ || player !== turn)}
  >{d === _ ? ' ' : d}</Button>))
}</div>);

Game.propTypes = {
  board: PropTypes.array.isRequired,
  player: PropTypes.oneOf([_, O, X]),
  turn: PropTypes.oneOf([_, O, X]),
  onClick: PropTypes.func,
  done: PropTypes.bool,
};

export default Game;
