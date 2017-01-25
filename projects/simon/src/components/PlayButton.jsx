import React from 'react';
import Button from './Button';

const PlayButton = props => (<Button {...props}>{String.fromCharCode(0x25B6)}</Button>);

export default PlayButton;
