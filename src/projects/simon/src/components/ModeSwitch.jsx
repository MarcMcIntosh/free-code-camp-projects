import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onToggleMode } from '../actions';
import Button from './Button';

const mapStateToProps = state => ({
  mode: state.mode,
  disabled: state.inGame,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onToggleMode()),
});

const ModeSwitch = ({
  mode,
  ...props
}) => (<Button {...props}>{mode}</Button>);

ModeSwitch.propTypes = {
  mode: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
