import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { number, func, bool } from 'prop-types';
// import formatTime from './util/formatTime';
import { start, stop, reset, tick } from './actions';

const mapStateToProps = ({
  pomodoroClock: { time, shortBreak, longBreak, round, maxRounds, session, rest, running, timerId, showMenu },
}) => ({ time, shortBreak, longBreak, round, maxRounds, session, rest, running, timerId, showMenu });

const mapDispatchToProps = dispatch => ({
  tick: () => dispatch(tick()),
  start: payload => dispatch(start(payload)),
  stop: () => dispatch(stop()),
  reset: () => dispatch(reset()),
});

class Pomodoro extends PureComponent {
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
    const {
      props: { time, shortBreak, longBreak, round, maxRounds, session, rest, running, timerId, showMenu },
      context: { classnames },
    } = this;
    console.log({ time, shortBreak, longBreak, round, maxRounds, session, rest, running, timerId, showMenu });
    return (<div className={classnames('pomodoro')}>
      add components here
    </div>);
  }
}

Pomodoro.propTypes = {
  timerId: number.isRequired,
  time: number.isRequired,
  session: number.isRequired,
  shortBreak: number.isRequired,
  longBreak: number.isRequired,
  round: number.isRequired,
  maxRounds: number.isRequired,
  rest: bool.isRequired,
  running: bool.isRequired,
  showMenu: bool.isRequired,
  start: func.isRequired,
  stop: func.isRequired,
  reset: func.isRequired,
  tick: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
