import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Page from './src/components/Page';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    // const { children, ...props } = this.props;
    return (
      <Provider store={this.store}>
        {/* <div {...props}>{children}</div> */}
        <Page />
      </Provider>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
