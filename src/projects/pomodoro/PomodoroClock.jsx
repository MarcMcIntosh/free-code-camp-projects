import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number, func, bool } from 'prop-types';
// import formatTime from './util/formatTime';
import { start, stop, reset, tick, menu, setSession, setShortBreak, setLongBreak } from './actions';
import Slider from './components/Slider';
import DoubleDigits from './components/DoubleDigits';
import DoubleDots from './components/DoubleDots';
// import TimeDisplay from './components/TimeDisplay';
// import Clock from './components/Clock';

const mapStateToProps = ({
  pomodoroClock: { time, shortBreak, longBreak, round, maxRounds, session, rest, running, timerId, showMenu },
}) => ({ time, shortBreak, longBreak, round, maxRounds, session, rest, running, timerId, showMenu });

const mapDispatchToProps = dispatch => ({
  tick: () => dispatch(tick()),
  start: payload => dispatch(start(payload)),
  stop: () => dispatch(stop()),
  reset: () => dispatch(reset()),
  menu: () => dispatch(menu()),
  setSession: value => dispatch(setSession(value)),
  setShortBreak: value => dispatch(setShortBreak(value)),
  setLongBreak: value => dispatch(setLongBreak(value)),
});

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this._togglePlay = this._togglePlay.bind(this);
    this._reset = this._reset.bind(this);
  }
  componentWillUnmount() {
    clearInterval(this.props.timerId);
  }
  _reset() {
    clearInterval(this.props.timerId);
    return this.props.reset();
  }
  _togglePlay() {
    /* clearn any timers */
    if (this.props.timerId) { clearInterval(this.props.timerId); }
    /* if running stop */
    if (this.props.running) { return this.props.stop(); }
    /* set a new timer and start the clock */
    const timerId = setInterval(this.props.tick, 1000);
    return this.props.start(timerId);
  }
  render() {
    const { classnames } = this.context;
    const minutes = Math.floor(this.props.time / 60);
    const seconds = this.props.time % 60;
    return (<div className={classnames('pomodoro')}>
      <section className={classnames('pomodoro__horizontal-block')}>

        <section className={classnames('pomodoro__clock')}>

          <DoubleDigits className={classnames('pomodoro__display')} data={minutes} />

          <span className={classnames('pomodoro__display')}><DoubleDots /></span>

          <DoubleDigits className={classnames('pomodoro__display')} data={seconds} />

        </section>

        <section className={classnames('pomodoro__actions')}>

          <button title={this.props.running ? 'Stop' : 'Start'} className={classnames('pomodoro__button')} tabIndex="0" onClick={this._togglePlay} ><i className={classnames('pomodoro__button--icon')}>{this.props.running ? 'pause_circle_outline' : 'play_circle_outline'}</i></button>

          <button title={this.props.showMenu ? 'close settings' : 'open settings'} tabIndex="0" onClick={this.props.menu} className={classnames('pomodoro__button')}><i className={classnames('pomodoro__button--icon')}>settings</i></button>

        </section>

      </section>

      <section className={classnames('pomodoro__settings', this.props.showMenu && 'pomodoro__settings--open')}>
        <Slider name="session" label="Session length" min="1" max="50" step="1" value={this.props.session} onChange={this.props.setSession} />

        <Slider name="shortBreak" label="Short Break" min="1" max="10" step="1" value={this.props.shortBreak} onChange={this.props.setShortBreak} />

        <Slider name="longBreak" label="Long Break" min="10" max="30" step="5" value={this.props.longBreak} onChange={this.props.setLongBreak} />
      </section>
    </div>);
  }
}

PomodoroClock.propTypes = {
  timerId: number.isRequired,
  time: number.isRequired,
  session: number.isRequired,
  shortBreak: number.isRequired,
  longBreak: number.isRequired,
  //  round: number.isRequired,
  //  maxRounds: number.isRequired,
  //  rest: bool.isRequired,
  running: bool.isRequired,
  showMenu: bool.isRequired,
  start: func.isRequired,
  stop: func.isRequired,
  reset: func.isRequired,
  tick: func.isRequired,
  menu: func.isRequired,
  setSession: func.isRequired,
  setShortBreak: func.isRequired,
  setLongBreak: func.isRequired,
};

PomodoroClock.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroClock);
