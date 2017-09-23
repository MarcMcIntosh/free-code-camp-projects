import React from 'react';
import { node } from 'prop-types';

const Td = ({ children }) => (<td>{children}</td>);

Td.propTypes = { children: node.isRequired };

export default Td;
