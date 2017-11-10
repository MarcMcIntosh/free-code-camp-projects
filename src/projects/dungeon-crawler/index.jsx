import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { func } from 'prop-types';
import store from './store';
import App from './DungeonCrawler';
import cx from './styles';

class DungeonCrawler extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.classnames = cx;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (
      <Provider store={this.store}><App /></Provider>
    );
  }
}

DungeonCrawler.childContextTypes = { classnames: func.isRequired };

export default DungeonCrawler;
