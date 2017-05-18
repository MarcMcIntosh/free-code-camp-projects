import React, { Component } from 'react';
import { node } from 'prop-types';
import { Provider } from 'react-redux';
import store from './src/store';
import DataGlobe from './src/components/Page';

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

Container.propTypes = { children: node.isRequired };

export default Container;
export { DataGlobe };
