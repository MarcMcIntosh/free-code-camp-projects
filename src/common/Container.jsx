import React, { Component } from 'react';
import { node } from 'prop-types';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
// import { BrowserRouter } from 'react-router-dom';
// import { StaticRouter } from 'react-router';
// import { renderRoutes } from 'react-router-config';
// import { routes } from './routes';
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