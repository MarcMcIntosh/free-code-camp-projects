import React from 'react';
import Button from './Button';

const Menu = props => (<Button {...props}>menu</Button>);

Menu.defaultProps = { className: 'material-icons' };

export default Menu;
