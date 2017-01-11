import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
// import Users, { Error } from './src/components/UserList';
import UserList, { UserError } from './src/components/UserList';

// import Header from './src/components/Header';
// import Container from './src/components/Container';

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
export { UserList, UserError };
