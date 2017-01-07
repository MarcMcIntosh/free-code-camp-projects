import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions';
import Icon from './Icon';

class Display extends Component {
  componentDidMount() {
    if (!this.props.hasCoords) {
      this.props.getWeather();
    }
  }
  render() {
    const { success, icon, error, classed, weather, description } = this.props;
    if (success) {
      return (<div className={classed}>
        <h1>{weather}</h1>
        <p>{description}</p>
        <Icon src={`http://openweathermap.org/img/w/${icon}.png`} />
      </div>);
    } else if (error) {
      return (<div className={`${classed} error`}>{error}</div>);
    }
    return (<div className={this.props.classed}>{

    }</div>);
  }
}

Display.propTypes = {
  success: PropTypes.bool,
  hasCoords: PropTypes.bool,
  classed: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
  weather: PropTypes.string,
  description: PropTypes.string,
  getWeather: PropTypes.func,
};

const mapStateToProps = (state) => {
  const {
    isFetching,
    hasCoords,
    isPermitting,
    error,
    icon,
    success,
    weather,
  } = state;
  return {
    isFetching,
    hasCoords,
    isPermitting,
    error,
    icon,
    success,
    weather,
  };
};

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
