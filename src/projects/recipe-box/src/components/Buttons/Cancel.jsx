import React from 'react';
import Button from './Button';

const Cancel = props => (<Button {...props}>cancel</Button>);

Cancel.defaultProps = {
  title: 'Cancel',
  className: 'recipe-box__button material-icons',
};

export default Cancel;
