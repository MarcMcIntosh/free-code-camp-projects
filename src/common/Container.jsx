import React, { Component } from 'react';
import { node } from 'prop-types';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import classnames from './styles';

class ReduxContainer extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    // this.classnames = classnames;
  }
  // getChildContext() { return { classnames: this.classnames }; }
  render() {
    return (<AppContainer>
      <Provider store={this.store}>
        <div className={classnames('container')}>
          {this.props.children}
        </div>
      </Provider>
    </AppContainer>);
  }
}

ReduxContainer.propTypes = {
  children: node.isRequired,
};

export default ReduxContainer;
