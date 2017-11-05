import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { func } from 'prop-types';
import store from './store';
import Buttons from './components/CalculatorButtons';
import Display from './components/Display';
import cx from './styles';

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
      <div className={cx('calculator')}>
        <Display classnames={cx} />
        <Buttons classnames={cx} />
      </div>
    </Provider>);
  }
}

Calculator.childContextTypes = { classnames: func };

export default Calculator;
