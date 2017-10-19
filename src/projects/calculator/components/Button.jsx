import React from 'react';
import { node } from 'prop-types';

const Button = ({ children, ...props }) => (<button tabIndex="0" type="button" {...props}>{children}</button>);

Button.propTypes = {
  children: node.isRequired,
};

export default Button;
