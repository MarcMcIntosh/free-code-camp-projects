import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import defaultStore from './src/store';
import RandomWiki from './src/components/RandomWiki';
import List from './src/components/List';
import ListItem from './src/components/ListItem';

const Container = (props) => {
  const { children, store, ...args } = props;
  return (<Provider store={store}>
    <div {...args}>{children}</div>
  </Provider>);
};

Container.propTypes = {
  children: PropTypes.node,
  store: PropTypes.shape({
    results: PropTypes.array.isRequired,
    term: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }),
};

Container.defaultProps = {
  store: defaultStore,
};

export default Container;
export { RandomWiki, List, ListItem };
