import React from 'react';
import Button from './Button';

const Edit = props => (<Button {...props}>mode_edit</Button>);

Edit.defaultProps = { className: 'material-icons' };

export default Edit;
