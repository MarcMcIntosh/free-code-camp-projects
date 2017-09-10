import React, { PropTypes } from 'react';

const TurnDisplay = ({
  turn,
  player,
  ...props
}) => (
  <div {...props}>
    <h2>{(turn === player) ? 'Player\'s ' : 'Computer\'s '}Turn</h2>
  </div>);

TurnDisplay.propTypes = {
  turn: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
};

export default TurnDisplay;
