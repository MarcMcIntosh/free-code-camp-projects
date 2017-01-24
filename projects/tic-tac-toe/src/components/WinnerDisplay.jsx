import React, { PropTypes } from 'react';
import Button from './Button';
import Constants from '../Constants';
import finalMessage from '../util/final-message';

const WinnerDisplay = ({
  winner,
  onClick,
  ...props
}) => (<div {...props}>
  <h2>{finalMessage(winner)}</h2>
  <Button className="reset" onClick={onClick}>Reset</Button>
</div>);

const { _, X, O } = Constants.PLAYER;

WinnerDisplay.propTypes = {
  winner: PropTypes.oneOf([_, X, O]),
  onClick: PropTypes.func.isRequired,
};

export default WinnerDisplay;
