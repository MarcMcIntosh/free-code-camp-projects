import React, { PropTypes } from 'react';
import Button from './Button';

const Cell = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

Cell.propTypes = {
  children: PropTypes.node,
};

export default Cell;
