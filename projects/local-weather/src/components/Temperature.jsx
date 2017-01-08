import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleTemperature } from '../actions';

const TempControl = (props) => {
  const { classed, degrees, celsius, fahrenheit } = props;
  const temp = (degrees === 'F') ? fahrenheit : celsius;
  return (<button
    type="button"
    className={classed}
    onClick={(event) => {
      event.preventDefault();
      return props.handleClick(degrees);
    }}
  >{temp}&deg;{degrees}</button>);
};

TempControl.propTypes = {
  classed: PropTypes.string,
  celsius: PropTypes.number,
  fahrenheit: PropTypes.numner,
  degrees: PropTypes.degrees,
  handleClick: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { celsius, fahrenheit, degrees } = state;
  return { celsius, fahrenheit, degrees };
};

const mapDispatchToProps = dispatch => ({
  handleClick: degrees => dispatch(toggleTemperature(degrees)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TempControl);
