import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Recipes from './src/components/Recipes/Main';
import Menu from './src/components/Menu';
import Display from './src/components/Display';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    const { children, ...props } = this.props;
    return (
      <Provider store={this.store}>
        <div {...props}>{children}</div>
      </Provider>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.defaultProps = { className: 'recipe-box' };

export default Container;
export {
  Recipes,
  Menu,
  Display,
};
