import React, { Component } from 'react';
import { func } from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import App from './PomodoroClock';
import classnames from './styles';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.classnames = classnames;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (<Provider store={this.store}><App /></Provider>);
  }
}

Pomodoro.childContextTypes = { classnames: func.isRequired };

export default Pomodoro;
