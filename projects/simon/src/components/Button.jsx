import React from 'react';

const Button = ({
  children,
  ...props
}) => (<button tabIndex="0" {...props}>{children}</button>);
