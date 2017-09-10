import React, { PropTypes } from 'react';

const Td = ({ children }) => (<td>{children}</td>);

Td.propTypes = { children: PropTypes.node };

export default Td;
