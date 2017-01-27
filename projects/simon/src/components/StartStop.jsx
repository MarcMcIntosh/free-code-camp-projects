import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Constants from '../Constants';
import { onStartGame, onResetGame } from '../actions';
import Button from './Button';
import PlayIconSVG from './icons/PlayIconSVG';
import StopIconSVG from './icons/StopIconSVG';

const mapStateToProps = state => ({
  playing: state.inGame,
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(onStartGame()),
  resetGame: () => dispatch(onResetGame()),
});

const StartStop = ({
  config,
  playing,
  startGame,
  resetGame,
  ...props
}) => {
  const handleClick = (!playing) ? startGame : resetGame;
  return (
    <Button {...props} onClick={handleClick} >
      {(!playing) ? (
        <PlayIconSVG className={config.PLAY} />
      ) : (
        <StopIconSVG className={config.STOP} />
      )}
    </Button>);
};

StartStop.propTypes = {
  playing: PropTypes.bool,
  startGame: PropTypes.func,
  resetGame: PropTypes.func,
  config: PropTypes.shape({
    PLAY: PropTypes.string,
    STOP: PropTypes.string,
  }),
};

const { BTN } = Constants.CLASSNAMES;

StartStop.defaultProps = { config: BTN };

export default connect(mapStateToProps, mapDispatchToProps)(StartStop);
