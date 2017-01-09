import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Users from './src/components/Users';

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
export { Users };
