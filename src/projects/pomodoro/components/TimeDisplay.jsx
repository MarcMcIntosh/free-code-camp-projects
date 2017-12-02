import React from 'react';
import { number } from 'prop-types';

const leftPad = n => ((n < 10) ? `0${n}` : n);

const TimeDisplay = ({ time, ...props }) => {
  const seconds = leftPad(time % 60);
  const minutes = leftPad(Math.floor(time / 60));
  return (<h1 {...props}>{minutes}:{seconds}</h1>);
};

TimeDisplay.propTypes = { time: number.isRequired };

export default TimeDisplay;
