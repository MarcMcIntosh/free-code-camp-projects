import React from 'react';
import { connect } from 'react-redux';
import { onToggleWave } from '../actions';

const mapStateToProps = state => ({
  className: `simon__wave--${state.wave}`,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onToggleWave()),
});

const ModeSwitch = props => (<button type="button" title="Tone control" tabIndex="0" {...props} />);

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
