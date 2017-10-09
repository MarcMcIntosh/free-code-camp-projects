import React from 'react';
import Button from './Button';

const Delete = props => (<Button {...props} >delete_forever</Button>);

Delete.defaultProps = {
  className: 'recipe-box__button material-icons',
  title: 'Delete',
};

export default Delete;
