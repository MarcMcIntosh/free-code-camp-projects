import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Display from './src/components/Display';
import Icon from './src/components/Icon';
import TempControl from './src/components/TempControl';
import Details from './src/components/Details';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <div className={this.props.classed}>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

Container.propTypes = {
  classed: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  classed: 'app__container',
};

export default Container;
export { Display, Icon, TempControl, Details };
