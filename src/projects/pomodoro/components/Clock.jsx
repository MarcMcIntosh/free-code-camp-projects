import React from 'react';
import { number } from 'prop-types';
// https://codepen.io/davidkpiano/pen/Vmyyzd?editors=1010
import Digit from './Digit';

const leftPad = n => ((n < 10) ? `0${n}` : n.toString());

function convertTo(n) {
  switch (Number(n)) {
    case 0: return 0x7E.toString(2);
    case 1: return '0' + 0x30.toString(2);
    case 2: return 0x6D.toString(2);
    case 3: return 0x79.toString(2);
    case 4: return '0' + 0x33.toString(2);
    case 5: return 0x5B.toString(2);
    case 6: return 0x5F.toString(2);
    case 7: return 0x70.toString(2);
    case 8: return 0x7F.toString(2);
    case 9: return 0x7B.toString(2);
    default: return n;
  }
}

const formatTime = (n) => {
  const minutes = leftPad(Math.floor(n / 60));
  const seconds = leftPad(n % 60);
  return minutes + seconds;
};

const Clock = ({ time, ...props }) => {
  const arr = formatTime(time).split('').map(d => convertTo(d));
  return (<div {...props}>{arr.map((n, i) => {
    const k = i;
    return (<Digit key={k} display={n} />);
  })}</div>);
};

Clock.propTypes = { time: number.isRequired };

export default Clock;
