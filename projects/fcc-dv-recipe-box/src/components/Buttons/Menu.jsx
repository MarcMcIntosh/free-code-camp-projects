import React from 'react';
import Button from './Button';

const Menu = props => (<Button title="menu" {...props}>menu</Button>);

Menu.defaultProps = { className: 'material-icons' };

export default Menu;
