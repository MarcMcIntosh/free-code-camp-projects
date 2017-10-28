import React from 'react';
import { func, array } from 'prop-types';
import Item from './Item';


const Menu = ({
  recipes,
  onClick,
  ...props
}) => (<div {...props}>
  {recipes.map(({ title, desc, image }, i) => {
    const k = `recipe:${1}`;
    return (<Item
      key={k}
      onClick={onClick}
      value={i}
      title={title}
      desc={desc}
      image={image}
    />);
  })}
</div>);

Menu.propTypes = {
  recipes: array.isRequired,
  onClick: func.isRequired,
};

export default Menu;
