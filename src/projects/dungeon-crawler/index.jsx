import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Board from './src/components/Board';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <Board />
      </Provider>
    );
  }
}

export default Container;
