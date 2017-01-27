import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import PlayButton from './PlayButton';
// import ResetButton from './ResetButton';
import {
  onStartGame,
  onResetGame,
  onToggleMode,
  onToggleWave,
} from '../actions';
// import ModeSwitch from './ModeSwitch';
import Button from './Button';
import PlayIconSVG from './PlayIconSVG';
import StopIconSVG from './StopIconSVG';
import WaveIcons from './WaveIcons';

const mapStateToProps = state => ({
  playing: state.inGame,
  error: state.error,
  round: state.round,
  mode: state.mode,
  wave: state.wave,
//  turn: state.turn,
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(onStartGame()),
  resetGame: () => dispatch(onResetGame()),
  toggleMode: () => dispatch(onToggleMode()),
  toggleWave: event => dispatch(onToggleWave(event)),
});

const GameController = ({
  playing,
  round,
  mode,
  wave,
  error,
  startGame,
  resetGame,
  toggleMode,
  toggleWave,
  ...props
}) => {
  const handleClick = () => ((playing) ? resetGame() : startGame());

  return (<div {...props}>
    <span className="round">{round}</span>
    <Button className={playing ? 'reset' : 'play'} onClick={handleClick}>{(playing) ? (<StopIconSVG />) : (<PlayIconSVG />)}</Button>
    <Button className={`mode ${mode}`} disabled={playing} onClick={toggleMode}>{mode}</Button>
    <Button className="wave" onClick={toggleWave}>
      <WaveIcons wave={wave} />
    </Button>
    {error ? (<span className="error">{error}</span>) : false}
  </div>);
};

GameController.propTypes = {
  playing: PropTypes.bool,
  round: PropTypes.number,
  mode: PropTypes.string,
  error: PropTypes.string,
  wave: PropTypes.string,
  startGame: PropTypes.func,
  resetGame: PropTypes.func,
  toggleMode: PropTypes.func,
  toggleWave: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameController);
