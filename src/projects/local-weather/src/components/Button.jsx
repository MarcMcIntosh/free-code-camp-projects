import React, { PropTypes } from 'react';

const Button = ({
  children,
  ...props
}) => (<button type="button" tabIndex="0" {...props}>{children}</button>);

Button.propTypes = { children: PropTypes.node };

export default Button;
