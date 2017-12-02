import React from 'react';
import { func } from 'prop-types';

const DoubleDots = (props, { classnames }) => (<svg viewBox="0 0 4 12" className={classnames('pomodoro__dots')} {...props}>
  <rect x="1" width="2" y="2" height="2" className={classnames('pomodoro__led', 'pomodoro__led--blink')} />
  <rect x="1" width="2" y="8" height="2" className={classnames('pomodoro__led', 'pomodoro__led--blink')} />
</svg>);

DoubleDots.contextTypes = { classnames: func.isRequired };

export default DoubleDots;
