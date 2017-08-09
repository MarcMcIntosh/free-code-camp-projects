import React from 'react';
import Button from './Button';

const Close = props => (<Button {...props}>close</Button>);

Close.defaultProps = { className: 'material-icons' };

export default Close;
