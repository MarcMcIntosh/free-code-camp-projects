import React from 'react';
import { func, bool, number } from 'prop-types';
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
  <h2 className="title">{'Conway\'s Game of Life'}</h2>
  <div className="controls__game">
    <div className="button__group">
      <Button className="play" onClick={onTogglePlay} disabled={running}>Run</Button>
      <Button
        className="pause"
        onClick={() => { clearTimeout(timer); return onTogglePlay(); }}
        disabled={!running}
      >Pause</Button>
    </div>
  </div>
  <div className="controls__board">
    <h3 className="subtitle">Set Board</h3>
    <div className="button__group">
      <Button
        className="reset"
        onClick={() => { clearTimeout(timer); return onResetGame(); }}
      >Reset</Button>
      <Button className="random" onClick={onSetRandom}>Random</Button>
    </div>
  </div>
  <div className="generation">Generation: {gen}</div>
</div>);

TopMenu.propTypes = {
  onTogglePlay: func.isRequired,
  onResetGame: func.isRequired,
  onSetRandom: func.isRequired,
  running: bool.isRequired,
  gen: number.isRequired,
  timer: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
