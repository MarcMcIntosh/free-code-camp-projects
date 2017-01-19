import React, { PropTypes } from 'react';
import Row from './Row';

const TurnDisplay = ({
  turn,
  player,
  ...props
}) => (<Row {...props}>
  <th colSpan="3">{(turn === player) ? 'Player\'s ' : 'Computer\'s '}Turn</th>
</Row>);

TurnDisplay.propTypes = {
  turn: PropTypes.bool,
  player: PropTypes.bool,
};

export default TurnDisplay;
