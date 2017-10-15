import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './components/Menu';
import {
  toggleMenu,
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
  onToggleMenu: () => dispatch(toggleMenu()),
  onAddNew: () => dispatch(addNew()),
  onViewRecipe: event => dispatch(recipeView(event.target.value)),
  onEdit: event => dispatch(recipeEdit(event.target.value)),
  onDelete: event => dispatch(recipeDelete(event.target.value)),
});

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { menu, onToggleMenu, onAddNew, recipes, active } = this.props;
    return (<div className="recipe-box">

      <Menu open={menu} onToggle={onToggleMenu} onAdd={onAddNew} recipes={recipes} recipe={active} />

      

    </div>);
  }
}
