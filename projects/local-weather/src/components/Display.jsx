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
    return (<div className={this.props.classed}>Hello</div>);
  }
}

Display.propTypes = {
  classed: PropTypes.string,
  hasCoords: PropTypes.bool,
  getWeather: PropTypes.func,
};

const mapStateToProps = (state) => {
  const {
    isFetching,
    hasCoords,
    isPermitting,
    error,
  } = state;
  return {
    isFetching,
    hasCoords,
    isPermitting,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
