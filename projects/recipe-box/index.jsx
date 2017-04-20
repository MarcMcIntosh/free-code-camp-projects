import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './src/store';
import Cakes from './src/Cakes';

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

export default Container;
export {
  Cakes,
};
