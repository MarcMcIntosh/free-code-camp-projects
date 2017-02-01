import React, { PropTypes } from 'react';

const Container = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

Container.propTypes = { children: PropTypes.node };
