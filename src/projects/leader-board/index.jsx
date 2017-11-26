import React, { Component } from 'react';
import { func } from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import App from './LeaderBoard';
// import List from './components/List';
// import SortBy from './components/SortBy';

import classnames from './styles';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.classnames = classnames;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    /* return (
      <Provider store={this.store}>
        <div className="leaderboard">
          <SortBy value="recent">Recent</SortBy>
          <SortBy value="alltime">All Time</SortBy>
          <List className="users" />
        </div>
      </Provider>
    ); */
    return (<Provider store={this.store}><App /></Provider>);
  }
}

Leaderboard.childContextTypes = {
  classnames: func.isRequired,
};

export default Leaderboard;
