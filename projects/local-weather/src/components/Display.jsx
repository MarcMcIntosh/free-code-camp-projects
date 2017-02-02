import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions';

class Display extends Component {
  componentDidMount() {
    if (!this.props.hasCoords) {
      this.props.getWeather();
    }
  }
  render() {
    const { error, weather, className } = this.props;
    return (
      <div className={className}>
        {(error) ? (<div className="error">Error: {error} :( </div>) : null}
        {weather}
      </div>
    );
  }
}

Display.propTypes = {
  hasCoords: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
  weather: PropTypes.string,
  getWeather: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { hasCoords, error, weather } = state;
  return { hasCoords, error, weather };
};

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
