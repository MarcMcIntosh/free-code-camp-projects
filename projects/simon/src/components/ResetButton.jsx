import React from 'react';
import Button from './Button';

const ResetButton = props => (<Button {...props}>{String.fromCharCode(0x23F9)}</Button>);

export default ResetButton;
