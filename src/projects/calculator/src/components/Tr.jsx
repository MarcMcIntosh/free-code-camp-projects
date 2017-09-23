import React from 'react';
import { node } from 'prop-types';

const Tr = ({ children }) => (<tr>{children}</tr>);

Tr.propTypes = { children: node.isRequired };

export default Tr;
