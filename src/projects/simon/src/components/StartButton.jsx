import React from 'react';
import { connect } from 'react-redux';
import { onStartGame } from '../actions';

const mapStateToProps = state => ({
  disabled: state.inGame,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onStartGame()),
});

const StartButton = props => (<button type="button" className="simon__control--start" tabIndex="0" title="start" {...props}>play</button>);

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
