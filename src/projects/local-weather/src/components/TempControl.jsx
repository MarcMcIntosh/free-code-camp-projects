import React from 'react';
import { connect } from 'react-redux';
import { number, string, func } from 'prop-types';
import { toggleTemperature } from '../actions';
import Button from './Button';

const mapStateToProps = (state) => {
  const { celsius, fahrenheit, degrees } = state;
  return { celsius, fahrenheit, degrees };
};

const mapDispatchToProps = dispatch => ({
  onClick: event => dispatch(toggleTemperature(event.target.value)),
});

const TempControl = ({
  degrees,
  celsius,
  fahrenheit,
  ...props
}) => (<Button value={degrees} {...props}>
  {(degrees === 'F') ? fahrenheit : celsius}&deg;{degrees}
</Button>);

TempControl.propTypes = {
  celsius: number.isRequired,
  fahrenheit: number.isRequired,
  degrees: string.isRequired,
  onClick: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TempControl);
