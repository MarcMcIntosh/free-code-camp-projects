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

const { _, X, O } = Constants.PLAYER;

WinnerDisplay.propTypes = {
  winner: PropTypes.oneOf([_, X, O]),
  player: PropTypes.string.isRequired,
  ai: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WinnerDisplay;
