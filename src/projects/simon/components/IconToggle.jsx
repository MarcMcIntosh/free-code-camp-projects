import React from 'react';
import { func, node } from 'prop-types';

const IconToggle = ({ children, ...props }, { classnames }) => (<i
  className={classnames('simon__icon-toggle')}
  role="button"
  tabIndex="-1"
  {...props}
>{children}</i>);

IconToggle.propTypes = { children: node.isRequired };
IconToggle.contextTypes = { classnames: func.isRequired };

export default IconToggle;
