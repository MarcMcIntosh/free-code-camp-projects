import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { recipeEdit, recipeView, recipeDelete } from '../actions';
import WelcomeMessage from './WelcomeMessage';
import Recipe from './Recipe';
import RecipeForm from './Form/Recipe';

const mapStateToProps = state => ({
  active: state.active,
  edit: state.edit,
  recipes: state.recipes,
});

const mapDispatchToProps = dispatch => ({
  onDelete: n => dispatch(recipeDelete(n)),
  onEdit: () => dispatch(recipeEdit()),
  onSetView: n => dispatch(recipeView(n)),
});

class Display extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleEdit() {
    this.props.onEdit(!this.props.edit);
  }
  handleDelete() {
    this.props.onDelete(this.props.active);
  }
  render() {
    const { active, edit, recipes, onSetView } = this.props;
    if (
      !edit
      && (active === -1 || active >= recipes.length)
    ) {
      return (<WelcomeMessage />);
    } else if (edit) {
      return (<RecipeForm {...recipes[active]} />);
    }
    return (<Recipe
      {...recipes[active]}
      onEdit={this.handleEdit}
      onClose={() => onSetView(-1)}
      onDelete={this.handleDelete}
    />);
  }
}

const { number, bool, array, func } = PropTypes;
Display.propTypes = {
  active: number.isRequired,
  edit: bool.isRequired,
  recipes: array.isRequired,
  onEdit: func.isRequired,
  onSetView: func.isRequired,
  onDelete: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
