import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  // toggleMenu,
  addNew,
  recipeView,
  recipeEdit,
  recipeDelete,
} from './actions';


const mapStateToProps = state => ({
  menu: state.menu,
  recipes: state.recipes,
  active: state.active,
  edit: state.edit,
});

const mapDispatchToProps = dispatch => ({
  // onToggleMenu: () => dispatch(toggleMenu()),
  onAddNew: () => dispatch(addNew()),
  onView: event => dispatch(recipeView(event.target.value)),
  onEdit: event => dispatch(recipeEdit(event.target.value)),
  onDelete: event => dispatch(recipeDelete(event.target.value)),
});

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { menu, onToggleMenu, onAddNew, onView, recipes, active } = this.props;
    return (<div className="recipe-box">
      {/* List of recipes */}
      <ul role="menu" className="recipe-box__menu">{recipes.map((d, i) => {
        const cn = (active === i) ? 'recipe-box__menu-item recipe-box__menu-item--active' : 'recipe-box__menu-item';
        return (<li role="menuitem" value={i} className={cn} onClick={onView}>
          <img alt="" className="recipe-box__menu-item__image" />
          <span className="recipe-box__menu-item__text" />
        </li>);
      })}
      </ul>
    </div>);
  }
}
