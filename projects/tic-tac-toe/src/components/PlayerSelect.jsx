import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onSelectPlayer } from '../actions';
import { Button } from './Button';

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => ({
  selectPlayer: player => dispatch(onSelectPlayer(player)),
});

const PlayerSelect = ({
  player,
  selectPlayer,
  ...props
}) => {
  const handleClick = event => selectPlayer(event.target.value);
  return (player) ? false : (<div {...props}>
    <Button value="0" onClick={handleClick}>O</Button>
    <Button value="X" onClick={handleClick}>X</Button>
  </div>);
};

PlayerSelect.propTypes = {
  player: PropTypes.string,
  selectPlayer: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelect);
