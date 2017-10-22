import React from 'react';
import { func, array } from 'prop-types';
import Item from './Item';

const Menu = ({
  cx,
  recipes,
  onClick,
}) => (<div className={cx('recipe-box-menu')}>

  <ul role="menu" className={cx('recipe-box-menu__tiles')}>{
    Object.keys(recipes).reduce((a, b) => a.concat(recipes[b]), []).map(({
      _id,
      name,
      picture,
    }) => (<Item
      key={_id}
      value={_id}
      name={name}
      picture={picture}
      cx={cx}
      onClick={onClick}
    />))
  }</ul>
</div>);

Menu.propTypes = {
  cx: func.isRequired,
  onClick: func.isRequired,
  recipes: array.isRequired,
};

export default Menu;
