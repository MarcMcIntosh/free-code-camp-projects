import React from 'react';
import { func } from 'prop-types';

const Display = (props, { classnames }) => (<div className={classnames('calculator__display')}>
  <input className={classnames('calculator__screen')} type="text" readOnly="true" {...props} />
</div>);


Display.contextTypes = { classnames: func.isRequired };

export default Display;
