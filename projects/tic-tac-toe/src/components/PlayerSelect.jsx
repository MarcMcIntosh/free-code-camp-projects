import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { onSelectPlayer } from '../actions';

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => ({
  selectPlayer: player => dispatch(onSelectPlayer(player)),
});


const PlayerSelect = ({ player, selectPlayer, ...props }) => {
  const handleClick = event => selectPlayer(event.target.value);

  return (!player) ? (<div {...props}>
    <h4>Select Player</h4>
    <Button value="O" onClick={handleClick}>O</Button>
    <Button value="X" onClick={handleClick}>X</Button>
  </div>) : false;
};

PlayerSelect.propTypes = {
  player: PropTypes.string,
  selectPlayer: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelect);
