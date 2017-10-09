import React from 'react';
import { func, bool, array, number } from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleMenu, addNew, recipeView } from '../actions';
import Button from './Buttons';

const mapStateToProps = state => ({
  isActive: state.menu,
  recipes: state.recipes,
  recipe: state.active,
});

const mapDispatchToProps = dispatch => ({
  onToggleMenu: (event) => {
    event.preventDefault();
    dispatch(toggleMenu());
    return false;
  },
  onAddNew: (event) => {
    event.preventDefault();
    dispatch(addNew());
    return false;
  },
  onViewRecipe: n => dispatch(recipeView(n)),
});

const Menu = ({
  isActive,
  onToggleMenu,
  onAddNew,
  onViewRecipe,
  recipes,
  recipe,
}) => {
  const mo = isActive ? 'menu--open' : 'menu--closed';
  return (<nav className={classNames('menu', mo)}>
    <Button tabIndex="0" className="material-icons menu__control" onClick={onToggleMenu}>{(isActive) ? 'close' : 'menu'}</Button>

    {(!isActive) ? false : (<ul className="menu__content">
      <li className="menu__item">
        <a role="button" tabIndex="0" onClick={onAddNew} >
          <i className="material-icons">playlist_add</i>New Recipe
        </a>
      </li>
      {recipes.map((d, i) => {
        const handleClick = (event) => {
          event.preventDefault();
          onViewRecipe(i);
          return false;
        };
        const k = `${d.name}:${i}`;
        const cn = classNames('menu__item', { 'menu__item--active': (i === recipe) });

        return (<li key={k} className={cn}>
          <a role="button" tabIndex="0" onClick={handleClick}>{d.name}</a>
        </li>);
      })}
    </ul>)}
  </nav>);
};

Menu.propTypes = {
  isActive: bool.isRequired,
  onToggleMenu: func.isRequired,
  onAddNew: func.isRequired,
  onViewRecipe: func.isRequired,
  recipes: array.isRequired,
  recipe: number.isRequired,
};

Menu.defaultProps = { className: 'menu' };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
