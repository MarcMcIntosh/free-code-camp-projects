import React from 'react';
import Button from './Button';

const Cancel = props => (<Button {...props}>cancel</Button>);

Cancel.defaultProps = { className: 'material-icons' };

export default Cancel;
