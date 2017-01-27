import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onToggleWave } from '../actions';
import Button from './Button';
import WaveIcons from './WaveIcons';

const mapStateToProps = state => ({
  wave: state.wave,
});

const mapDispatchToProps = dispatch => ({
  onClick: event => dispatch(onToggleWave(event)),
});

const ModeSwitch = ({
  wave,
  ...props
}) => (<Button {...props}>
  <WaveIcons wave={wave} />
</Button>);

ModeSwitch.propTypes = {
  wave: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
