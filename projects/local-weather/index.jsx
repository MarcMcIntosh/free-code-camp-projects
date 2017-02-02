import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Display from './src/components/Display';
import Icon from './src/components/Icon';
import TempControl from './src/components/TempControl';
import Details from './src/components/Details';
import task from './task';

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

Container.propTypes = { children: PropTypes.node };

export default Container;
export { Display, Icon, TempControl, Details, task };
