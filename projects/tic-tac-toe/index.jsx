import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import PlayerSelect from './src/components/PlayerSelect';
import Board from './src/components/Board';

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
  children: PropTypes.node.isRequired,
};


export default TicTacToe;
export {
  PlayerSelect,
  Board,
};
