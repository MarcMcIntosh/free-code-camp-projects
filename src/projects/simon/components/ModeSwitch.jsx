import React from 'react';
import { string, func } from 'prop-types';

const Switch = (props, { classnames }) => (<div>
  <span className={classnames('simon-switch')}>

    <input type="checkbox" {...props} className={classnames('simon-switch__native-control')} />

    <div className={classnames('simon-switch__background')}>
      <div className={classnames('simon-switch__knob')} />
    </div>
  </span>

  <label htmlFor={props.name} className={classnames('simon__label')}>
    {props.label}
  </label>

</div>);

Switch.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
};

Switch.contextTypes = { classnames: func.isRequired };

export default Switch;
