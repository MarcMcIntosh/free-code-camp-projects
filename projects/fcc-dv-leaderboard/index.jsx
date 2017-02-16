import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import List from './src/components/UserList';
import ListItem from './src/components/ListItem';
import Constants from './src/Constants';
import SortBy from './src/SortBy';

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
  List,
  ListItem,
  Constants,
  SortBy,
};
