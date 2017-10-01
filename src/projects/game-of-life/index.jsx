import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Game from './src/components/Game';
import TopMenu from './src/components/TopMenu';
import BottomMenu from './src/components/BottomMenu';
import './src/styles/game-of-life.scss';

class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <div className="game-of-life">
          <TopMenu />
          <Game />
          <BottomMenu />
        </div>
      </Provider>
    );
  }
}

export default GameOfLife;
