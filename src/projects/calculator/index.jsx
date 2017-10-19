import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Buttons from './components/CalculatorButtons';
import Display from './components/Display';
import cx from './styles';

class Calculator extends Component {
  constructor() {
    super();
    this.store = store;
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

export default Calculator;
