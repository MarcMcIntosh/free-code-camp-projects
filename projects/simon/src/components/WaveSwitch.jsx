import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onToggleWave } from '../actions';
import Button from './Button';

const mapStateToProps = state => ({
  value: state.wave,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onToggleWave()),
});

const ModeSwitch = props => (<Button {...props} />);

const { string, func } = PropTypes;

ModeSwitch.propTypes = {
  className: string,
  onClick: func,
  value: string,
};

ModeSwitch.defaultProps = {
  className: 'wave',
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
