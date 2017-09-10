import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleTemperature } from '../actions';
import Button from './Button';
/*
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
*/

const TempControl = ({
  degrees,
  celsius,
  fahrenheit,
  ...props
}) => (<Button value={degrees} {...props}>
  {(degrees === 'F') ? fahrenheit : celsius}&deg;{degrees}
</Button>);

TempControl.propTypes = {
  // classed: PropTypes.string,
  celsius: PropTypes.number,
  fahrenheit: PropTypes.number,
  degrees: PropTypes.string,
  onClick: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { celsius, fahrenheit, degrees } = state;
  return { celsius, fahrenheit, degrees };
};

const mapDispatchToProps = dispatch => ({
  onClick: event => dispatch(toggleTemperature(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TempControl);
