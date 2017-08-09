import React, { PropTypes } from 'react';

const Button = ({
  children,
  ...props
}) => (<button {...props} >{children}</button>);

Button.propTypes = { children: PropTypes.node };

Button.defaultProps = {
  children: null,
  type: 'button',
  tabIndex: 0,
};

export default Button;
