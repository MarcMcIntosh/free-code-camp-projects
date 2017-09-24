import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import TheForce from './src/components/Page';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <TheForce />
      </Provider>
    );
  }
}

export default Container;
