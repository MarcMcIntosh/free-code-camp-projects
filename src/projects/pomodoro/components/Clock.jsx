import React from 'react';
import { number, func } from 'prop-types';
// https://codepen.io/davidkpiano/pen/Vmyyzd?editors=1010
import DoubleDigits from './DoubleDigits';

const Clock = ({ time, ...props }, { classnames }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (<div {...props}>
    <DoubleDigits data={minutes} />
    <span className={classnames('pomodoro__display-dots')}>
      <div className={classnames('pomodoro__display-dot')} />
      <div className={classnames('pomodoro__display-dot')} />
    </span>
    <DoubleDigits data={seconds} />
  </div>);
};

Clock.propTypes = { time: number.isRequired };
Clock.contextTypes = { classnames: func.isRequired };

export default Clock;
