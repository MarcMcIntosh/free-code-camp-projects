import React, { PropTypes } from 'react';

const Button = ({ children, ...props }) => (
  <button type="button" tabIndex="0" {...props} >{children}</button>
);

Button.propTypes = { children: PropTypes.node };

Button.defaultProps = { children: null };

export default Button;
