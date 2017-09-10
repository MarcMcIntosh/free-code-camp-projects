import React, { PropTypes } from 'react';
import Button from './Button';

const Icon = ({
  children,
  ...props
}) => (<Button {...props}><i className="material-icons">{children}</i></Button>);

Icon.propTypes = { children: PropTypes.node.isRequired };

export default Icon;
