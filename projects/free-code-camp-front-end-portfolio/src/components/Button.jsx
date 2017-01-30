import React, { PropTypes } from 'react';

const Button = ({ children, ...props }) => (
  <button tabIndex="0" type="button" {...props}>{children}</button>
);

Button.propTypes = { children: PropTypes.node };

export default Button;
