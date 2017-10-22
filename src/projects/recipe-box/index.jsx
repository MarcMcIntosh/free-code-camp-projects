import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './RecipeBox';
import classnames from './styles';

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
