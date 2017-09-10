import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import UserList from './src/components/UserList';
import Header from './src/components/Header';
import task from './task';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    const { children, ...props } = this.props;
    return (<Provider store={this.store}>
      <div {...props}>{children}</div>
    </Provider>);
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
export { UserList, Header, task };
