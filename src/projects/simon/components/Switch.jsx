import React from 'react';
import { string, func } from 'prop-types';

const Switch = (props, { classnames }) => (<div>
  <div>
    <label htmlFor={props.name} className={classnames('simon__helptext')}>{props.label}</label>
    <p className={classnames('simon__helptext')}>{props.value}</p>
  </div>

  <div className={classnames('simon-switch')}>

    <input type="checkbox" {...props} className={classnames('simon-switch__native-control')} />

    <div className={classnames('simon-switch__background')}>
      <div className={classnames('simon-switch__knob')} />
    </div>
  </div>
</div>);

Switch.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
};

Switch.contextTypes = { classnames: func.isRequired };

export default Switch;
