import React, { PropTypes } from 'react';

const Game = ({
  data,
  onClick,
  ...props
}) => (<svg {...props}>{
  data.map((y, i) => y.map((x, ii) => (
    <rect y={i} x={ii} onClick={onClick} className={(x) ? 'cell--alive' : 'cell--dead'} />
  )))
}</svg>);

const { array, func } = PropTypes;
Game.propTypes = {
  data: array.isRequired,
  onClick: func.isRequired,
};

export default Game;
