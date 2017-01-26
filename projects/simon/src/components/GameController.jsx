import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PlayButton from './PlayButton';
import ResetButton from './ResetButton';
import { onStartGame, onResetGame } from '../actions';

const mapStateToProps = state => ({
  playing: state.inGame,
  error: state.error,
  round: state.round,
//  turn: state.turn,
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(onStartGame()),
  resetGame: () => dispatch(onResetGame()),
});

const GameController = ({
  playing,
  startGame,
  resetGame,
  ...props
}) => {
  if (!playing) return (<PlayButton {...props} onClick={startGame} />);
  return (<ResetButton {...props} onClick={resetGame} />);
};

GameController.propTypes = {
  playing: PropTypes.bool,
  startGame: PropTypes.func,
  resetGame: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameController);
