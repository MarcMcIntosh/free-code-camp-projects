import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import KeyBoard from './src/components/KeyBoard';
import Wave from './src/components/WaveSwitch';
import Mode from './src/components/ModeSwitch';
import StartButton from './src/components/StartButton';
import ResetButton from './src/components/ResetButton';
import Round from './src/components/Round';
import Volume from './src/components/Volume';
import task from './task';
import CONSTANTS from './src/Constants';

class Simon extends Component {
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

Simon.propTypes = { children: PropTypes.node };

export default Simon;
export {
  KeyBoard,
  Wave,
  Mode,
  StartButton,
  ResetButton,
  Round,
  Volume,
  task,
  CONSTANTS,
};
