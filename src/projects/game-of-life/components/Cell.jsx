import React from 'react';
import { func, bool } from 'prop-types';

const Cell = (props, { classnames }) => (<div className={classnames('game-of-life-cell', props.disabled && 'game-of-life-cell--disabled')}>
  <input
    type="checkbox"
    className={classnames('game-of-life-cell__native-control')}
    {...props}
  />

  <div
    className={classnames('game-of-life-cell__background')}
  >
    <svg
      className={classnames('game-of-life-cell__checkmark')}
      viewBox="0 0 24 24"
    >
      <path
        className={classnames('game-of-life-cell__checkmark__path')}
        fill="none"
        stroke="white"
        d="M1.73,12.91 8.1,19.28 22.79,4.59"
      />
    </svg>
    <div className={classnames('game-of-life-cell__mixedmark')} />
  </div>
</div>);

Cell.propTypes = { disabled: bool };
Cell.defaultProps = { disabled: false };
Cell.contextTypes = { classnames: func.isRequired };

export default Cell;
