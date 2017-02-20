import React, { PropTypes } from 'react';
import Button from '../Buttons';

const Tab = ({ children, ...props }) => (<Button {...props}>{children}</Button>);

Tab.propTypes = { children: PropTypes.node.isRequired };

export default Tab;
