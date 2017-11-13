import React from 'react';
import { node } from 'prop-types';

const Button = ({ children, ...props }) => (<button type="button" {...props}>{children}</button>);

Button.propTypes = { children: node };

Button.defaultProps = { children: false };

export default Button;
