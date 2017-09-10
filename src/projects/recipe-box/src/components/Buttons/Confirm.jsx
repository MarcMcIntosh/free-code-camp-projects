import React from 'react';
import Button from './Button';

const Confirm = props => (<Button {...props}>check</Button>);

Confirm.defaultProps = {
  title: 'Confirm',
  className: 'material-icons',
};

export default Confirm;
