import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Header from './src/components/Header';
import Board from './src/components/Board';
import task from './task';

class TicTacToe extends Component {
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

TicTacToe.propTypes = {
  children: PropTypes.node,
};


export default TicTacToe;
export { Header, Board, task };
