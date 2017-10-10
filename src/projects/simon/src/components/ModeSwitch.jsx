import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import { onToggleMode } from '../actions';

const mapStateToProps = state => ({
  value: state.mode,
  disabled: state.inGame,
  className: `simon__mode--${state.mode}`,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onToggleMode()),
});

const ModeSwitch = props => (<button type="button" tabIndex="0" title="Toggle difficulty setting" {...props}>{props.value}</button>);

ModeSwitch.propTypes = { value: string.isRequired };


export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
