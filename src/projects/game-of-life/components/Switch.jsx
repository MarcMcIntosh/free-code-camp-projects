import React from 'react';
import { func, string, bool } from 'prop-types';

const Switch = ({
  label,
  ...props
}, {
  classnames,
}) => (<span className={classnames('game-of-life-switch')}>
  <div className={classnames('game-of-life-switch__switch', props.disabled && 'game-of-life-switch__switch--disabled')}>
    <input type="checkbox" className={classnames('game-of-life-switch__native-control')} {...props} />
    <div classNames={classnames('game-of-life-switch__background')}><div classNames={classnames('game-of-life-switch__knob')} /></div>
  </div>
  <label htmlFor={props.name} className={classnames('game-of-life-switch__label')}>{label}</label>
</span>);

Switch.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  disabled: bool,
};

Switch.defaultProps = { disabled: false };

Switch.contextTypes = { classnames: func.isRequired };

export default Switch;
