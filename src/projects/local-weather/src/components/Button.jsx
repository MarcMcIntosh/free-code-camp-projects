import React from 'react';
import { node } from 'prop-types';

const Button = ({
  children,
  ...props
}) => (<button type="button" tabIndex="0" {...props}>{children}</button>);

Button.propTypes = { children: node.isRequired };

export default Button;
