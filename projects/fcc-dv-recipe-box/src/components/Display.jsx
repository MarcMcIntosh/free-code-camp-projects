import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { recipeEdit } from '../actions';
import WelcomeMessage from './WelcomeMessage';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

const mapStateToProps = state => ({
  active: state.active,
  edit: state.edit,
  recipes: state.recipes,
});

const mapDispatchToProps = dispatch => ({
  onEdit: () => dispatch(recipeEdit()),
});

class Display extends Component {
  constructor(props) {
    super(props);
    // this.handleEdit = this.handleEdit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    const { active, edit, recipes } = this.props;
    if (
      !edit
      && (active === -1 || active >= recipes.length)
    ) {
      return (<WelcomeMessage />);
    } else if (edit) {
      return (<RecipeForm />);
    }
    return (<Recipe {...recipes[active]} onEdit={() => {}} onDelete={() => {}} />);
  }
}

const { number, bool, array, func } = PropTypes;
Display.propTypes = {
  active: number.isRequired,
  edit: bool.isRequired,
  recipes: array.isRequired,
  onEdit: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
