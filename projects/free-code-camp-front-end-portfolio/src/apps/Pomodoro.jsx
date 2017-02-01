import React from 'react';
import Container, {
  ShortBreak,
  LongBreak,
  SetSession,
  SetRounds,
  Clock,
  task,
} from '../../lib/pomodoro-clock';
import './Pomodoro.scss';

const Pomodoro = () => (<Container>
  <Clock />
  <SetRounds />
  <SetSession />
  <ShortBreak />
  <LongBreak />
</Container>);

export default Pomodoro;
export { task };
