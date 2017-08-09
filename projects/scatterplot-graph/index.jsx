import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Page from './src/components/Page';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <Page {...this.props} />
      </Provider>
    );
  }
}

export default Container;
