import React from 'react';
import { number, func } from 'prop-types';
// https://codepen.io/davidkpiano/pen/Vmyyzd?editors=1010
import DoubleDigits from './DoubleDigits';
import DoubleDots from './DoubleDots';

const Clock = ({ time, ...props }, { classnames }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (<div {...props}>
    <DoubleDigits className={classnames('pomodoro__display')} data={minutes} />
    <span className={classnames('pomodoro__display')}>
      <DoubleDots />
    </span>
    <DoubleDigits className={classnames('pomodoro__display')} data={seconds} />
  </div>);
};

Clock.propTypes = { time: number.isRequired };
Clock.contextTypes = { classnames: func.isRequired };

export default Clock;
