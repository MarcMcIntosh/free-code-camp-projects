import React, { PureComponent } from 'react';
import { func, number, string, bool } from 'prop-types';
import { connect } from 'react-redux';

import { iconHasLoaded, getWeather, toggleTemperature } from './actions';

// import Display from './components/Display';
// import Icon from './components/Icon';
// import TempControl from './components/TempControl';
// import Details from './components/Details';

const mapStateToProps = ({
  localWeather: {
    description,
    hasCoords,
    error,
    weather,
    celsius,
    fahrenheit,
    degrees,
  },
}) => ({ description, hasCoords, error, weather, celsius, fahrenheit, degrees });

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeather()),
  iconHasLoaded: () => dispatch(iconHasLoaded()),
  toggleTemperature: event => dispatch(toggleTemperature(event.target.value)),
});

class LocalWeather extends PureComponent {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    return (<div className="mdc-card local-weather">
      <Icon className="local-weather__icon" />

      <section className="mdc-card__primary">
        <Display className="mdc-card__title--large" />
        <Details className="mdc-card__subtitle" />
      </section>

      <section className="mdc-card__actions local-weather__buttons">
        <TempControl className="mdc-button mdc-button--raised mdc-button--primary" />
      </section>
    </div>);
  }
}

LocalWeather.propTypes = {
  getWeather: func.isRequired,
  toggleTemperature: func.isRequired,
  iconHasLoaded: func.isRequired,
  celsius: number.isRequired,
  fahrenheit: number.isRequired,
  degrees: string.isRequired,
  className: string.isRequired,
  icon: string.isRequired,
  description: string.isRequired,
  iconLoaded: bool.isRequired,
  isLoading: bool.isRequired,
  hasCoords: bool.isRequired,
  error: string.isRequired,
  weather: string.isRequired,
};

LocalWeather.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(LocalWeather);
