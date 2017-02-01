import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import RandomWiki from './src/components/RandomWiki';
import List from './src/components/List';
import ListItem from './src/components/ListItem';
import SearchBar from './src/components/SearchBar';
import task from './task';

const Container = (props) => {
  const { children, ...args } = props;
  return (<Provider store={store}>
    <div {...args}>{children}</div>
  </Provider>);
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
export { RandomWiki, List, ListItem, SearchBar, task };
