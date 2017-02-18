import React, { PropTypes } from 'react';
import Button from './Button';

const Done = ({
  children,
  ...props
}) => (<Button {...props}>{children}</Button>);

Done.propTypes = { children: PropTypes.node };
Done.defaultProps = {
  children: 'done', className: 'material-icons',
};

export default Done;
