import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Menu from './src/components/Menu';
import Display from './src/components/Display';

import './src/styles';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <div {...this.props}>
          <Menu />
          <Display />
        </div>
      </Provider>
    );
  }
}

RecipeBox.defaultProps = { className: 'recipe-box' };

export default RecipeBox;
