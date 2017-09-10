import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onStartGame } from '../actions';
import Button from './Button';

const mapStateToProps = state => ({
  disabled: state.inGame,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onStartGame()),
});

const StartButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

StartButton.propTypes = { children: PropTypes.node };

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
