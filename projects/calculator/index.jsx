import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Buttons from './src/components/CalculatorButtons';
import Display from './src/components/Display';
import ErrorMessage from './src/components/ErrorMessage';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    const { children, ...rest } = this.props;
    return (
      <Provider store={this.store}>
        <div {...rest}>{children}</div>
      </Provider>
    );
  }
}

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Calculator;
export { Display, Buttons, ErrorMessage };
