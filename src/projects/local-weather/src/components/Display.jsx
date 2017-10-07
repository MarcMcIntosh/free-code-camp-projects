import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bool, string, func } from 'prop-types';
import { getWeather } from '../actions';

const mapStateToProps = (state) => {
  const { hasCoords, error, weather } = state;
  return { hasCoords, error, weather };
};

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeather()),
});

class Display extends PureComponent {
  componentDidMount() {
    if (!this.props.hasCoords) {
      this.props.getWeather();
    }
  }
  render() {
    const { error, weather, ...rest } = this.props;
    return (
      <div {...rest}>
        {(error) ? (<div className="error">Error: {error} :( </div>) : null}
        {weather}
      </div>
    );
  }
}

Display.propTypes = {
  hasCoords: bool.isRequired,
  error: string.isRequired,
  weather: string.isRequired,
  getWeather: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
