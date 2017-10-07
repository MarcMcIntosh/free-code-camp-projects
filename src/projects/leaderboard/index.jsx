import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import List from './src/components/List';
import SortBy from './src/components/SortBy';

import './src/styles';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <div className="leaderboard">
          <SortBy value="recent">Recent</SortBy>
          <SortBy value="alltime">All Time</SortBy>
          <List className="users" />
        </div>
      </Provider>
    );
  }
}

export default Leaderboard;
