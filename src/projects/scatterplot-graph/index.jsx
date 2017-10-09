import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src/App';
import './src/styles';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (<Provider store={this.store}><App /></Provider>);
  }
}

export default Container;
