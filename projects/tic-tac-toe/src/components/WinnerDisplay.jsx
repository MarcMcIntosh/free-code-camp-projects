import React, { PropTypes } from 'react';
import Button from './Button';
import Constants from '../Constants';
import finalMessage from '../util/final-message';

const WinnerDisplay = ({
  winner,
  player,
  ai,
  onClick,
  ...props
}) => (<div {...props}>
  <h2>{finalMessage(winner, player, ai)}</h2>
  <Button onClick={onClick}>Reset</Button>
</div>);

const { PLAYER } = Constants;

WinnerDisplay.propTypes = {
  winner: PropTypes.oneOf([PLAYER._, PLAYER.X, PLAYER.O]).isRequired,
  player: PropTypes.bool.isRequired,
  ai: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WinnerDisplay;
