import React from 'react';
import { func, bool } from 'prop-types';

const Cell = (props, { classnames }) => (<div
  className={classnames('game-of-life-cell', props.disabled && 'game-of-life-cell--disabled')}
>
  <input
    type="checkbox"
    className={classnames('game-of-life-cell__native-control')}
    {...props}
  />

  <div
    className={classnames('game-of-life-cell__background')}
  />
</div>);

Cell.propTypes = { disabled: bool };
Cell.defaultProps = { disabled: false };
Cell.contextTypes = { classnames: func.isRequired };

export default Cell;
