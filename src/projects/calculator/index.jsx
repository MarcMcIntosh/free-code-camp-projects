import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Buttons from './src/components/CalculatorButtons';
import Display from './src/components/Display';
import './src/styles';

class Calculator extends Component {
  constructor() {
    super();
    this.store = store;
  }
  render() {
    return (<Provider store={this.store}>
      <div className="calculator">
        <Display />
        <Buttons />
      </div>
    </Provider>);
  }
}

export default Calculator;
