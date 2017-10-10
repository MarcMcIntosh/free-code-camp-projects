import React from 'react';
import { connect } from 'react-redux';
import { onResetGame } from '../actions';
// import Button from './Button';

const mapStateToProps = state => ({
  disabled: !state.inGame,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onResetGame()),
});

const ResetButton = props => (<button type="button" tabIndex="0" title="stop" className="simon__control--stop" {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
