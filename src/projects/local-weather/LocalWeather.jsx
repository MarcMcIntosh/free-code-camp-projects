import React, { PureComponent } from 'react';
import { func, number, string, bool } from 'prop-types';
import { connect } from 'react-redux';

import {
  clientError,
  setWatchId,
  clientCoords,
  geoError,
  fetchWeather,
  // iconHasLoaded,
  // getWeather,
  // toggleTemperature,
} from './actions';

// import Display from './components/Display';
// import Icon from './components/Icon';
// import TempControl from './components/TempControl';
// import Details from './components/Details';

const mapStateToProps = ({
  localWeather: {
    // description,
    hasCoords,
    error,
    // weather,
    // celsius,
    // fahrenheit,
    // degrees,
    watchId,
    longitude,
    latitude,
    icon,
  },
}) => ({
  // description,
  hasCoords,
  error,
  // weather,
  // celsius,
  // fahrenheit,
  // degrees,
  watchId,
  longitude,
  latitude,
  icon,
});

const mapDispatchToProps = dispatch => ({
  setWatchId: n => dispatch(setWatchId(n)),
  setError: str => dispatch(clientError(str)),
  onGeoError: payload => dispatch(geoError(payload)),
  onCoords: payload => dispatch(clientCoords(payload)),
  fetchWeather: payload => dispatch(fetchWeather(payload)),
  // getWeather: () => dispatch(getWeather()),
  // iconHasLoaded: () => dispatch(iconHasLoaded()),
  // toggleTemperature: event => dispatch(toggleTemperature(event.target.value)),
});

class LocalWeather extends PureComponent {
  constructor(props) {
    super(props);
    this._geo = this._geo.bind(this);
  }
  componentDidMount() { this._geo(); }
  componentWillReceiveProps(nextProps) {
    const { latitude, longitude, hasCoords, apiKey } = nextProps;
    const diffrentPosition = (this.props.latitude !== latitude || this.props.longitude !== longitude);
    if (diffrentPosition && hasCoords) {
      this.props.fetchWeather({ latitude, longitude, apiKey });
    }
  }
  componentWillUnmount() {
    if (this.props.watchId) {
      navigator.geolocation.clearWatch(this.props.watchId);
      this.props.setWatchId(0);
    }
  }
  _geo() {
    if (!navigator.geolocation) {
      return this.props.setError('Sorry, looks like your browser does not support geolocation');
    } else if (this.props.watchId) {
      /* do some thing with navigator */
      navigator.geolocation.clearWatch(this.props.watchId);
    }
    const options = { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 };
    const id = navigator.geolocation.watchPosition(this.props.onCoords, this.props.onGeoError, options);
    return this.props.setWatchId(id);
  }
  render() {
    return (<div className="mdc-card local-weather">
      {/* <Icon className="local-weather__icon" /> */}
      <img
        src={this.props.icon && `http://openweathermap.org/img/w/${this.props.icon}.png`}
        alt={this.props.icon}
      />
      {/*
      <section className="mdc-card__primary">
        <Display className="mdc-card__title--large" />
        <Details className="mdc-card__subtitle" />
      </section>

      <section className="mdc-card__actions local-weather__buttons">
        <TempControl className="mdc-button mdc-button--raised mdc-button--primary" />
      </section>
      */}
    </div>);
  }
}

LocalWeather.propTypes = {
  watchId: number.isRequired,
  setWatchId: func.isRequired,
  setError: func.isRequired,
  onCoords: func.isRequired,
  onGeoError: func.isRequired,
  latitude: number.isRequired,
  longitude: number.isRequired,
  hasCoords: bool.isRequired,
  fetchWeather: func.isRequired,
  //  getWeather: func.isRequired,
  //  toggleTemperature: func.isRequired,
  //  iconHasLoaded: func.isRequired,
  //  celsius: number.isRequired,
  //  fahrenheit: number.isRequired,
  //  degrees: string.isRequired,
  icon: string.isRequired,
  // description: string.isRequired,
  // iconLoaded: bool.isRequired,
  // isLoading: bool.isRequired,
  // hasCoords: bool.isRequired,
  error: string.isRequired,
  // weather: string.isRequired,
  apiKey: string,
};

LocalWeather.defaultProps = {
  apiKey: '8098f170d355d6b8099e49533b084a65',
};

LocalWeather.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(LocalWeather);
