import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { func } from 'prop-types';
import cx from './styles';
import store from './store';
import App from './BarChart';


class BarChart extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.classnames = cx;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (<Provider store={this.store}><App /></Provider>);
  }
}

BarChart.childContextTypes = { classnames: func.isRequired };

export default BarChart;
