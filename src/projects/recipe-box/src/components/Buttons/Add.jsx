import React from 'react';
import Button from './Button';

const Add = props => (<Button {...props}>playlist_add</Button>);

Add.defaultProps = {
  title: 'Add',
  className: 'material-icons',
};

export default Add;
