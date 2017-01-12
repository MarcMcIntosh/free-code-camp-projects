import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

import UserList, { UserError } from './src/components/UserList';
import Header from './src/components/Header';

const App = (props) => {
  const { children, ...args } = props;
  return (
    <Provider store={store}>
      <div {...args}>{children}</div>
    </Provider>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
export { UserList, UserError, Header };
