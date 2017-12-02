import React from 'react';
import { func, string } from 'prop-types';

const Digit = ({ display }, { classnames }) => (<div className={classnames('pomodoro__digit')}>{
  display.split('').map((d, i) => {
    const k = `${i}--${d}`;
    const mod = (+d) ? 'pomodoro__led--on' : 'pomodoro__led--off';
    return (<span key={k} className={classnames('pomodoro__led', mod)} />);
  })
}</div>);

Digit.propTypes = {
  display: string.isRequired,
};
Digit.contextTypes = { classnames: func.isRequired };

export default Digit;
