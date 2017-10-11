import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import ShortBreak from './src/components/ShortBreak';
import LongBreak from './src/components/LongBreak';
import SetSession from './src/components/SetSession';
import SetRounds from './src/components/SetRounds';
import TimeDisplay from './src/components/TimeDisplay';
import PlayButton from './src/components/PlayButton';
import StopButton from './src/components/StopButton';
import ResetButton from './src/components/ResetButton';
import task from './task';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    const { children, ...rest } = this.props;
    return (<Provider store={this.store}>
      <div {...rest}>{children}</div>
    </Provider>);
  }
}

Pomodoro.propTypes = {
  children: PropTypes.node,
};

export default Pomodoro;
export {
  ShortBreak,
  LongBreak,
  SetSession,
  SetRounds,
  PlayButton,
  StopButton,
  ResetButton,
  TimeDisplay as Clock,
  task,
};
