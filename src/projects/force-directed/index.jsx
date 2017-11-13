import React, { Component } from 'react';
import { func } from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import TheForce from './ForceDirected';
import classnames from './styles';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.classnames = classnames;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (
      <Provider store={this.store}>
        <TheForce />
      </Provider>
    );
  }
}

Container.childContextTypes = {
  classnames: func.isRequired,
};

export default Container;
