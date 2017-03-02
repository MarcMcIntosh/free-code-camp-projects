import React, { PropTypes } from 'react';

const Game = ({
  data,
  onClick,
  ...props
}) => (<svg></svg>)

const { array, func } = PropTypes;
Game.propTypes = {
  data: array.isRequired,
  onClick: func.isRequired,
};

export default Game;
