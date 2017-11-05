import React from 'react';
import { func, array } from 'prop-types';
import Item from './Item';
import AddImage from '../../styles/assets/ic_note_add_black_48px.svg';

const Menu = ({
  recipes,
  onRead,
  onCreate,
}, {
  classnames,
}) => (<div className={classnames('recipe-box-menu')}>
  <ul role="menu" className={classnames('recipe-box-menu__tiles')}>
    <Item
      title="Add Recipe"
      desc="Click here to add a recipe"
      image={AddImage}
      onClick={() => onCreate(true)}
    />
    {recipes.map(({ title, desc, image }, i) => {
      const k = `recipe:${i}`;
      return (<Item title={title} desc={desc} image={image} key={k} onClick={() => onRead(i)} />);
    })}
  </ul>
</div>);

Menu.propTypes = {
  recipes: array.isRequired,
  onRead: func.isRequired,
  onCreate: func.isRequired,
};

Menu.contextTypes = { classnames: func.isRequired };

export default Menu;
