import React, { Component } from 'react';
import { func } from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import App from './DataGlobe';
import cx from './styles';

class DataGlobe extends Component {
  constructor(props) {
    super(props);
    this.classnames = cx;
    this.store = store;
  }

  getChildContext() {
    return { classnames: this.classnames };
  }

  render() {
    return (<Provider store={this.store}><App /></Provider>);
  }
}

DataGlobe.childContextTypes = { classnames: func.isRequired };

export default DataGlobe;
