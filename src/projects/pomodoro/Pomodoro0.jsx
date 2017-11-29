import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number, string, func, bool } from 'prop-types';
import formatTime from './util/formatTime';
import { onStart, onStop, onReset, onSetSession, onSetMaxRounds, onSetShortBreak, onSetLongBreak } from './actions';

const mapStateToProps = state => ({
  round: state.round,
  time: formatTime(state.time),
  running: state.running,
  paused: state.paused,
  session: state.session / 60000,
  totalRounds: state.max_rounds,
  shortBreak: state.short_break / 60000,
  longBreak: state.long_break / 60000,
});

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(onStart()),
  stop: () => dispatch(onStop()),
  reset: () => dispatch(onReset()),
  setSession: event => dispatch(onSetSession(+event.target.value * 60000)),
  setMaxRounds: event => dispatch(onSetMaxRounds(+event.target.value)),
  setShortBreak: event => dispatch(onSetShortBreak(+event.target.value * 60000)),
  setLongBreak: event => dispatch(onSetLongBreak(+event.target.value * 60000)),
});

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  render() {
    const { time, round, running, paused, start, stop, reset, session, setSession, totalRounds, setMaxRounds, shortBreak, setShortBreak, longBreak, setLongBreak } = this.props;

    return (<div className="pomodoro">
      {/* Time Display */}
      <div className="pomodoro__clock">
        <h1 className="mdc-typography--headline">{time}</h1>,
        <h2 className="mdc-typography--body1">{round}</h2>
      </div>

      <section>
        {/* Play Button */}
        <button tabIndex="0" type="button" title="Start" className="material-icons md-36 pomodoro__button" onClick={start} disabled={running && !paused}>play_circle_outline</button>

        {/* Stop Button */}
        <button tabIndex="0" type="button" title="Pause" className="material-icons md-36 pomodoro__button" disabled={running || paused} onClick={stop} >
        pause_circle_outline</button>
      </section>

      {/* Toggle Menu Button */}
      <button tabIndex="0" type="button" title="menu" className="material-icons md-24 pomodoro__button" onClick={this.showMenu}>menu</button>

      {/* Menu */}
      {this.state.showMenu && (<div className="mdc-typography--body1 pomodoro__menu">
        <div>
          {/* Reset Button */}
          <button disabled={running || !paused} type="button" tabIndex="0" title="Reset" onClick={reset} className="material-icons md-36 pomodoro__button">refresh</button>
        </div>

        Session Duration
        <div className="pomodoro__slider">
          {session}
          <input type="range" className="mdc-range-slider mdc-range-slider--primary" min={1} max={60} value={session} disabled={running} onChange={setSession} />
        </div>

        Number of Rounds
        <div className="pomodoro__slider">
          {totalRounds}
          <input type="range" value={totalRounds} min={1} max={10} className="mdc-range-slider mdc-range-slider--secondary" onChange={setMaxRounds} disabled={running} />
        </div>

        Short Break Duration
        <div className="pomodoro__slider">
          {shortBreak}
          <input type="range" classNames="mdc-range-slider" value={shortBreak} min={1} max={15} onChange={setShortBreak} disabled={running} />
        </div>

        Final Break Duration
        <div className="pomodoro__slider">
          {longBreak}
          <input type="range" className="mdc-range-slider" value={longBreak} min={1} max={30} onChange={setLongBreak} disabled={running} />
        </div>

      </div>)}
    </div>);
  }
}

Pomodoro.propTypes = {
  time: string.isRequired,
  round: number.isRequired,
  start: func.isRequired,
  stop: func.isRequired,
  reset: func.isRequired,
  running: bool.isRequired,
  paused: bool.isRequired,
  setSession: func.isRequired,
  session: number.isRequired,
  totalRounds: number.isRequired,
  setMaxRounds: func.isRequired,
  shortBreak: number.isRequired,
  setShortBreak: func.isRequired,
  longBreak: number.isRequired,
  setLongBreak: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
