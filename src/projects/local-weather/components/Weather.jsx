import React from 'react';
import { func, oneOf, string, number } from 'prop-types';

const kelvinToCelsius = k => Math.round((k - 273.15) * 100) / 100;

const kelvinToFahrenheit = k => Math.round(((k * (9 / 5)) - 459.67) * 100) / 100;

const Weather = ({
  weather,
  description,
  icon,
  temperature,
  degrees,
  toggleTemperature,
}, { classnames }) => (<div className={classnames('local-weather__app')}>
  <img className={classnames('local-weather__icon')} title={description} alt={weather} src={icon && `http://openweathermap.org/img/w/${icon}.png`} />

  <span className={classnames('local-weather__weather')} >
    {weather}
    <span className={classnames('local-weather__description')}>
      {description}
    </span>
  </span>

  <span className={classnames('local-weather__temprature')}>
    <button
      className={classnames('local-weather__button')}
      value={degrees}
      onClick={toggleTemperature}
      tabIndex="0"
      title="Toggle between celsius and fahrenheit"
    >{(degrees === 'F') ? kelvinToFahrenheit(temperature) : kelvinToCelsius(temperature)}&deg;{degrees}</button>
  </span>
</div>);

Weather.propTypes = {
  weather: string.isRequired,
  description: string.isRequired,
  icon: string.isRequired,
  temperature: number.isRequired,
  degrees: oneOf(['F', 'C']).isRequired,
  toggleTemperature: func.isRequired,
};

Weather.contextTypes = { classnames: func.isRequired };

export default Weather;
