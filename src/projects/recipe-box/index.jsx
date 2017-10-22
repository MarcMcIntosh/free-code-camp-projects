import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src/RecipeBox';
import classnames from './src/styles';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  getChildContext() {
    return { classnames };
  }
  render() {
    return (
      <Provider store={this.store}><App /></Provider>
    );
  }
}

export default RecipeBox;
