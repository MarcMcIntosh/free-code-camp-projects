import React, { PureComponent } from 'react';
import { func, number, string, bool, object } from 'prop-types';
import { connect } from 'react-redux';
import Weather from './components/Weather';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Details from './components/Details';

import { clientError, setWatchId, clientCoords, geoError, fetchWeather, toggleTemperature } from './actions';

const mapStateToProps = ({
  localWeather: { isFetching, description, hasCoords, error, weather, temperature, degrees, watchId, longitude, latitude, icon, details, timestamp },
}) => ({ isFetching, description, hasCoords, error, weather, temperature, degrees, watchId, longitude, latitude, icon, details, timestamp });

const mapDispatchToProps = dispatch => ({
  setWatchId: n => dispatch(setWatchId(n)),
  setError: str => dispatch(clientError(str)),
  onGeoError: payload => dispatch(geoError(payload)),
  onCoords: payload => dispatch(clientCoords(payload)),
  fetchWeather: payload => dispatch(fetchWeather(payload)),
  toggleTemperature: event => dispatch(toggleTemperature(event.target.value)),
});

class LocalWeather extends PureComponent {
  constructor(props) {
    super(props);
    this._geo = this._geo.bind(this);
  }
  componentDidMount() { this._geo(); }
  componentWillReceiveProps(nextProps) {
    const { latitude, timestamp, longitude, hasCoords, isFetching, apiKey } = nextProps;
    // const diffrentPosition = (this.props.latitude !== latitude || this.props.longitude !== longitude);
    if (timestamp !== this.props.timestamp && hasCoords && !isFetching) {
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
    const options = { enableHighAccuracy: false, maximumAge: 30000, timeout: 27000 };
    const id = navigator.geolocation.watchPosition(this.props.onCoords, this.props.onGeoError, options);
    return this.props.setWatchId(id);
  }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('local-weather__card')}>
      <header className={classnames('local-weather__primary')}>
        <h1 className={classnames('local-weather__title')}>
          Local weather
        </h1>
        <h2 className={classnames('local-weather__subtitle')}>
          Sourced from <a href="http://openweathermap.org/">openweathermap.org</a>.
        </h2>
        {this.props.isFetching ? (<Loader />) : (<hr />)}
      </header>
      <div className={classnames('local-weather__media')}>
        {this.props.weather && (<Weather
          weather={this.props.weather}
          icon={this.props.icon}
          description={this.props.description}
          toggleTemperature={this.props.toggleTemperature}
          degrees={this.props.degrees}
          temperature={this.props.temperature}
        />)}
      </div>
      {this.props.error && (<ErrorMessage onClick={this._geo}>{this.props.error}</ErrorMessage>)}
      <div className={classnames('local-weather__supporting-text')}>{Object.keys(this.props.details).length > 0 && (<Details {...this.props.details} timestamp={this.props.timestamp} className={classnames('local-weather__details')} />)}</div>
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
  toggleTemperature: func.isRequired,
  temperature: number.isRequired,
  degrees: string.isRequired,
  icon: string.isRequired,
  description: string.isRequired,
  weather: string.isRequired,
  apiKey: string,
  isFetching: bool.isRequired,
  error: string.isRequired,
  details: object.isRequired,
  timestamp: number.isRequired,
};

LocalWeather.defaultProps = {
  apiKey: '8098f170d355d6b8099e49533b084a65',
};

LocalWeather.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(LocalWeather);
