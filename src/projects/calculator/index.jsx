import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { func } from 'prop-types';
import store from './store';
import cx from './styles';
import App from './Calculator';

class Calculator extends Component {
  constructor() {
    super();
    this.store = store;
    this.classnames = cx;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (<Provider store={this.store}>
      <App />
    </Provider>);
  }
}

Calculator.childContextTypes = { classnames: func };

export default Calculator;
