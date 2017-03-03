import React, { PropTypes} from 'react';
import { connect } from 'react-redux';
import { setSpeed } from '../actions';

const mapStateToProps = state => ({
  speed: state.speed,
});

const mapDispatchToProps = dispatch => ({
  onSetSpeed: event => dispatch(setSpeed(event.target.value)),
});

const SpeedControl = ({
  speed,
  onSetSpeed,
  ...props
}) => (<div>Hi</div>);

SpeedControl.propTypes = {
  speed: PropTypes.number.isRequired,
  onSetSpeed: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeedControl);
