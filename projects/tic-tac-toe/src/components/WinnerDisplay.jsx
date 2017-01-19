import React, { PropTypes } from 'react';
import Row from './Row';
import Col from './Col';
import Button from './Button';

import finalMessage from '../util/final-message';

const WinnerDisplay = ({
  winner,
  player,
  ai,
  onClick,
  ...props
}) => (<Row {...props}>
  <th colSpan="2">{finalMessage(winner, player, ai)}</th>
  <Col><Button onClick={onClick}>Reset</Button></Col>
</Row>);

WinnerDisplay.propTypes = {
  winner: PropTypes.oneOf([null, true, false]).isRequired,
  player: PropTypes.bool.isRequired,
  ai: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WinnerDisplay;
