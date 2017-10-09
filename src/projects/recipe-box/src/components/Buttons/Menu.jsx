import React from 'react';
import Button from './Button';

const Menu = props => (<Button {...props}>menu</Button>);

Menu.defaultProps = {
  className: 'recipe-box__button material-icons',
  title: 'Menu',
};

export default Menu;
