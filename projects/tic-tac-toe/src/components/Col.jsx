import React, { PropTypes } from 'react';

const Col = ({ children, ...props }) => (<td {...props}>{children}</td>);

Col.propTypes = {
  children: PropTypes.node,
};

export default Col;
