import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src/WikipediaViewer';

class WikipediaViewer extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (<Provider store={store}><App /></Provider>);
  }
}


export default WikipediaViewer;
