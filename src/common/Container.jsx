import React, { Component } from 'react';
import { node, func } from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import classnames from './styles';

/* Usage, child prop should be either broswer router or static router */

class ReduxContainer extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.classnames = classnames;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (<Provider store={this.store}><div className={this.classnames('container')}>{this.props.children}</div></Provider>);
  }
}

ReduxContainer.propTypes = { children: node.isRequired };

ReduxContainer.childContextTypes = { classnames: func.isRequired };

export default ReduxContainer;
