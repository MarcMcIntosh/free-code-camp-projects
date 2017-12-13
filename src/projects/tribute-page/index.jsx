import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { func } from 'prop-types';
import store from './store';
import TributePage from './TributePage';
import classnames from './styles';

class Container extends Component {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    this.store = store;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (<Provider store={this.store}><TributePage /></Provider>);
  }
}

Container.childContextTypes = { classnames: func.isRequired };

export default Container;
