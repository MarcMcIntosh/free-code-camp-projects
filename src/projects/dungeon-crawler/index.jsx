import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Board from './src/components/Board';
import './src/styles';

class DungeonCrawler extends Component {
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

export default DungeonCrawler;
