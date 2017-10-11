import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { onReset } from '../actions';

const mapStateToProps = state => ({
  disabled: !state.running || !state.paused,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onReset()),
});

const ResetButton = ({ children, ...props }) => (<Button {...props}>{children}</Button>);

ResetButton.propTypes = { children: PropTypes.node };
ResetButton.defaultProps = { children: 'reset' };

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
