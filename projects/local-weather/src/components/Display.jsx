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
    const { error, classed, weather, isPermitting, isLoading } = this.props;
    if (isPermitting) {
      return (<div className={`${classed} waiting`}>Allow ;)</div>);
    } else if (isLoading) {
      return (<div className={`${classed} loading`}>Loading :)</div>);
    } else if (error) {
      return (<div className={`${classed} error`}>Error: {error} :(
    </div>);
    }
    return (
      <div className={this.props.classed}> {weather} <Icon /></div>
    );
  }
}

Display.propTypes = {
  isLoading: PropTypes.bool,
  hasCoords: PropTypes.bool,
  classed: PropTypes.string,
  error: PropTypes.string,
  weather: PropTypes.string,
  getWeather: PropTypes.func,
  isPermitting: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const {
    isFetching,
    isPermitting,
    hasCoords,
    error,
    icon,
    weather,
  } = state;
  return {
    isFetching,
    isPermitting,
    hasCoords,
    error,
    icon,
    weather,
  };
};

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
