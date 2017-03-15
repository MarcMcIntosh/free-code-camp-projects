import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from './Button';

import {
  togglePlay,
  resetGame,
  setRandom,
} from '../actions';

const mapStateToProps = state => ({
  running: state.running,
  gen: state.gen,
  timer: state.timer,
});

const mapDispatchToProps = dispatch => ({
  onTogglePlay: () => dispatch(togglePlay()),
  onResetGame: () => dispatch(resetGame()),
  onSetRandom: () => dispatch(setRandom()),
});


const TopMenu = ({
  onTogglePlay,
  onResetGame,
  onSetRandom,
  running,
  gen,
  timer,
}) => (<div className="top-menu">
  <div className="button__group">
    <Button className="play" onClick={onTogglePlay} disabled={running}>Run</Button>
    <Button
      className="pause"
      onClick={() => { clearTimeout(timer); return onTogglePlay(); }}
      disabled={!running}
    >Pause</Button>
    <Button
      className="reset"
      onClick={() => { clearTimeout(timer); return onResetGame(); }}
    >Reset</Button>
    <Button className="random" onClick={onSetRandom}>Random</Button>
  </div>
  <div className="generation">Generation: {gen}</div>
</div>);

const { func, bool, number } = PropTypes;
TopMenu.propTypes = {
  onTogglePlay: func.isRequired,
  onResetGame: func.isRequired,
  onSetRandom: func.isRequired,
  running: bool.isRequired,
  gen: number.isRequired,
  timer: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
