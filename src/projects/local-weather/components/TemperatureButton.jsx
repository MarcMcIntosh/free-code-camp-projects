import React from 'react';
import { number, oneOf } from 'prop-types';

const kelvinToCelsius = k => Math.round((k - 273.15) * 100) / 100;

const kelvinToFahrenheit = k => Math.round(((k * (9 / 5)) - 459.67) * 100) / 100;

const TemperatureButton = ({ temperature, ...props }) => (<button tabIndex="0" title="Toggle between celsius and fahrenheit" {...props}>
  {(props.value === 'F') ? kelvinToFahrenheit(temperature) : kelvinToCelsius(temperature)} &deg;{props.value}
</button>);

TemperatureButton.propTypes = {
  temperature: number.isRequired,
  value: oneOf(['F', 'C']).isRequired,
};

export default TemperatureButton;
