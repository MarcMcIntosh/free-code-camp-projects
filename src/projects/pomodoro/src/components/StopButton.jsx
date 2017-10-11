import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { onStop } from '../actions';

const mapStateToProps = state => ({
  disabled: !state.running || state.paused,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onStop()),
});

const StopButton = ({ children, ...props }) => (<Button {...props}>{children}</Button>);

StopButton.propTypes = { children: PropTypes.node };
StopButton.defaultProps = { children: 'stop' };

export default connect(mapStateToProps, mapDispatchToProps)(StopButton);
