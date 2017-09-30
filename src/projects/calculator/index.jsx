import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Buttons from './src/components/CalculatorButtons';
import Display from './src/components/Display';
import cx from './src/styles';

class Calculator extends Component {
  constructor() {
    super();
    this.store = store;
  }
  render() {
    return (<Provider store={this.store}>
      <div className={cx('calculator')}>
        <Display cx={cx} />
        <Buttons cx={cx} />
      </div>
    </Provider>);
  }
}

export default Calculator;
