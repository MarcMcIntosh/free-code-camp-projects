import React from 'react';
import { func, array } from 'prop-types';

const Menu = ({
  recipes,
  onClick,
}, {
  classnames,
}) => (<div className={classnames('recipe-box-menu')}>
  <ul role="menu" className={classnames('recipe-box-menu__tiles')}>{
    recipes.map(({ title, desc, image }, i) => {
      const k = `recipe:${i}`;
      return (<li key={k} role="menuitem" className={classnames('recipe-box-menu-item')} onClick={() => onClick(i)}>

        <div className={classnames('recipe-box-menu-item__primary')}>
          <div className={classnames('recipe-box-menu-item__image')} style={image ? { backgroundImage: `url(${image})` } : {}} />
        </div>

        <span className={classnames('recipe-box-menu-item__text')}>

          <span className={classnames('recipe-box-menu-item__title')}>{title}</span>

          <span className={classnames('recipe-box-menu-item__desc')}>{desc}</span>

        </span>
      </li>);
    })}
  </ul>
</div>);

Menu.propTypes = {
  recipes: array.isRequired,
  onClick: func.isRequired,
};

Menu.contextTypes = { classnames: func.isRequired };

export default Menu;
