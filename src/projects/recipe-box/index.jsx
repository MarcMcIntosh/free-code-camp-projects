import React, { Component } from 'react';
import { func } from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import App from './RecipeBox';
import cx from './styles';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.classnames = cx;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (<Provider store={this.store}><App /></Provider>);
  }
}

RecipeBox.childContextTypes = { classnames: func };

export default RecipeBox;
