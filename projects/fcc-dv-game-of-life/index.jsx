import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
// import Settings from './src/components/Settings';
import Game from './src/components/Game';
import TopMenu from './src/components/TopMenu';
import BottomMenu from './src/components/BottomMenu';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    const { children, ...props } = this.props;
    return (
      <Provider store={this.store}>
        <div {...props}>{children}</div>
      </Provider>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: 'game-of-life',
};

export default Container;
export {
  Game,
  TopMenu,
  BottomMenu,
};
