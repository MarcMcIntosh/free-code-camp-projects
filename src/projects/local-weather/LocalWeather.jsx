import React, { PureComponent } from 'react';
import { func, number, string, bool } from 'prop-types';
import { connect } from 'react-redux';
import TemperatureButton from './components/TemperatureButton';
import Icon from './components/Icon';

import {
  clientError,
  setWatchId,
  clientCoords,
  geoError,
  fetchWeather,
  toggleTemperature,
} from './actions';

const mapStateToProps = ({
  localWeather: {
    description,
    hasCoords,
    error,
    weather,
    temperature,
    degrees,
    watchId,
    longitude,
    latitude,
    icon,
  },
}) => ({
  description,
  hasCoords,
  error,
  weather,
  temperature,
  degrees,
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
  toggleTemperature: event => dispatch(toggleTemperature(event.target.value)),
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
    const { classnames } = this.context;
    const { weather, description } = this.props;
    return (<div className={classnames('local-weather')}>
      {/* <Icon className="local-weather__icon" /> */}
      <div className={classnames('local-weather__container')}>
        <Icon
          src={this.props.icon}
          title={this.props.description}
          alt={this.props.weather}
          className={classnames('local-weather__icon')}
        />
        <span className={classnames('local-weather__weather')}>
          {weather}
          <span className={classnames('local-weather__description')}>{description}</span>
        </span>
        <span className={classnames('local-weather__temprature')}>
          {weather && (<TemperatureButton
            className={classnames('local-weather__button')}
            value={this.props.degrees}
            temperature={this.props.temperature}
            onClick={this.props.toggleTemperature}
          />)}
        </span>
      </div>
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
  toggleTemperature: func.isRequired,
  //  iconHasLoaded: func.isRequired,
  // celsius: number.isRequired,
  // fahrenheit: number.isRequired,
  temperature: number.isRequired,
  degrees: string.isRequired,
  icon: string.isRequired,
  description: string.isRequired,
  // iconLoaded: bool.isRequired,
  // isLoading: bool.isRequired,
  // hasCoords: bool.isRequired,
  // error: string.isRequired,
  weather: string.isRequired,
  apiKey: string,
};

LocalWeather.defaultProps = {
  apiKey: '8098f170d355d6b8099e49533b084a65',
};

LocalWeather.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(LocalWeather);
