import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import Container, {
  ResetButton,
  StopButton,
  PlayButton,
  ShortBreak,
  LongBreak,
  SetSession,
  SetRounds,
  Clock,
} from './index';
import Button from './src/components/Button';

require('./src/styles/main.scss');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  render() {
    return (<Container className="pomodoro">
      <Clock
        className="pomodoro__clock" classnames={{
          time: 'mdc-typography--headline',
          round: 'mdc-typography--body1',
        }}
      />

      <section>
        <PlayButton className="material-icons md-36 pomodoro__button">
        play_circle_outline</PlayButton>

        <StopButton className="material-icons md-36 pomodoro__button">
        pause_circle_outline</StopButton>
      </section>

      <Button
        className="material-icons md-24 pomodoro__button"
        onClick={this.showMenu}
      >menu</Button>

      {(!this.state.showMenu) ? (<section
        className="mdc-typography--body1 pomodoro__menu"
      >
        <div><ResetButton className="material-icons md-36 pomodoro__button">refresh</ResetButton>
        </div>

        Session Duration
        <SetSession className="pomodoro__slider" classnames={{ input: 'mdc-range-slider mdc-range-slider--primary' }} />

        Number of Rounds
        <SetRounds className="pomodoro__slider" classnames={{ input: 'mdc-range-slider mdc-range-slider--accent' }} />

        Short Break Duration
        <ShortBreak className="pomodoro__slider" classnames={{ input: 'mdc-range-slider' }} />

        Final Break Duration
        <LongBreak className="pomodoro__slider" classnames={{ input: 'mdc-range-slider' }} />


      </section>) : null}
    </Container>);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
