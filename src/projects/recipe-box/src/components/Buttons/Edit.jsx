import React from 'react';
import Button from './Button';

const Edit = props => (<Button {...props}>mode_edit</Button>);

Edit.defaultProps = {
  className: 'recipe-box__button material-icons',
  title: 'Edit',
};

export default Edit;
