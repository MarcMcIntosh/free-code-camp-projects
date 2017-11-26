import React, { Component } from 'react';
import { func } from 'prop-types';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src/LocalWeather';
import classnames from './src/styles';

class LocalWeather extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.classnames = classnames;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (
      <Provider store={this.store}><App /></Provider>
    );
  }
}

LocalWeather.childContextTypes = { classnames: func.isRequired };

export default LocalWeather;
