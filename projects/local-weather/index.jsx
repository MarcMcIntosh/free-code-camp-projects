import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Display from './src/components/Display';

class Container extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  componentDidMount() {
    if (!this.props.hasCoords) {
      this.props.getWeather();
    }
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
  hasCoords: PropTypes.bool,
  getWeather: PropTypes.func,
};

Container.defaultProps = {
  classed: 'app__container',
};

export default Container;
export { Display };
