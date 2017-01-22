import React, { PropTypes } from 'react';
import Constants from '../Constants';
import Button from './Button';

const { O, X } = Constants.PLAYER;

const PlayerSelect = ({ onClick, ...props }) => {
  const handleClick = event => onClick(event.target.value);
  return (<div {...props}>
    <h2>Select Player</h2>
    <Button value={O} onClick={handleClick}>{O}</Button>
    <Button value={X} onClick={handleClick}>{X}</Button>
  </div>);
};

PlayerSelect.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlayerSelect;
