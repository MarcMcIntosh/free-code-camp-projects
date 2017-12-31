import React, { Component } from 'react';
import { node, oneOfType, instanceOf } from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';
import store from './store';
import classnames from './styles';
/* Usage, child prop should be either broswer router or static router */

class ReduxContainer extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    // this.classnames = classnames;
  }
  // getChildContext() { return { classnames: this.classnames }; }
  render() {
    const { Router, children, ...props } = this.props;
    return (<Provider store={this.store}>
      <div className={classnames('container')}>
        <Router {...props}>
          {renderRoutes(routes)}
        </Router>
      </div>
    </Provider>);
  }
}

ReduxContainer.propTypes = {
  children: node.isRequired,
  Router: oneOfType([
    instanceOf(BrowserRouter),
    instanceOf(StaticRouter),
  ]).isRequired,
};

export default ReduxContainer;
