import React, { PropTypes } from 'react';

const Button = (props) => {
  const { children, ...rest } = props;
  return (<button tabIndex="0" type="button" {...rest}>{children}</button>);
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
