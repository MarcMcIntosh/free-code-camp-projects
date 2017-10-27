import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
// import Recipes from './src/components/Recipes/Main';
import Menu from './src/components/Menu';
import Display from './src/components/Display';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <div className="recipe-box">
          <Menu />
          <Display />
        </div>
      </Provider>
    );
  }
}


export default RecipeBox;
