import React, { PropTypes } from 'react';

const Button = ({
  children,
  ...props
}) => (<Button type="button" tabIndex="0" {...props} >{children}</Button>);

Button.propTypes = { children: PropTypes.node };
Button.defaultProps = { children: null };

export default Button;
