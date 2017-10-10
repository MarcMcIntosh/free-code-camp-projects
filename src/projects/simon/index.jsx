import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import KeyBoard from './src/components/KeyBoard';
import Wave from './src/components/WaveSwitch';
import Mode from './src/components/ModeSwitch';
import StartButton from './src/components/StartButton';
import ResetButton from './src/components/ResetButton';
import Round from './src/components/Round';
import Volume from './src/components/Volume';

import './src/styles';

class Simon extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <div className="simon" {...this.props}>
          <h3>Round: <Round /></h3>
          <h4>Difficulty: <Mode /></h4>
          <StartButton />
          <ResetButton />
          <b>Sound Wave: <Wave /></b>
          <div>Vol: <Volume /></div>
          <KeyBoard className="keys" />
        </div>
      </Provider>
    );
  }
}


export default Simon;
