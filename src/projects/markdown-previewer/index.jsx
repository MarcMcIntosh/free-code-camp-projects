import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    const { children, ...props } = this.props;
    return (
      <Provider store={this.store}>
        <div {...props}>{children}</div>
      </Provider>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
export { default as UserInput } from './src/components/UserInput';
export { default as Output } from './src/components/Output';
