import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src/App';

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (<Provider store={this.store}><App /></Provider>);
  }
}

export default MarkdownPreviewer;
