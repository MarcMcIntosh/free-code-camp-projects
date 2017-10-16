import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Editor from './Components/Editor';
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
    const { menu, onToggleMenu, onAddNew, onView, recipes, active, onClick, edit } = this.props;
    return (<div className="recipe-box">
      {/* Modal */}
      <Modal isOpen={active}>{active && edit ? <Editor {...recipes[active]} /> : <div>Recipe</div>}</Modal>
      {/* List of recipes */}
      <ul role="menu" className="recipe-box__menu">{recipes.map((recipe) => {
        const { _id, name, picture } = recipe;
        return (<li
          key={_id}
          value={_id}
          role="menuitem"
          className="recipe-box__menuitem"
          onClick={onClick}
          style={picture ? { backgroundImage: `url(${picture})` } : {}}
        ><span className="recipe-box__title">{name}</span>
        </li>);
      })}
      </ul>
    </div>);
  }
}
