import React, { PropTypes } from 'react';

const Button = ({ children, ...props }) => (<button type="button" {...props}>{children}</button>);

Button.propTypes = { children: PropTypes.node };

Button.defaultProps = { children: false };

export default Button;
