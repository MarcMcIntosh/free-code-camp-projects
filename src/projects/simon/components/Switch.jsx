import React from 'react';
import { func } from 'prop-types';

const Switch = (props, { classnames }) => (<div className={classnames('simon-switch')}>
  <input type="checkbox" {...props} className={classnames('simon-switch__native-control')} />

  <div className={classnames('simon-switch__background')}>
    <div className={classnames('simon-switch__knob')} />
  </div>
</div>);

Switch.contextTypes = { classnames: func.isRequired };

export default Switch;
