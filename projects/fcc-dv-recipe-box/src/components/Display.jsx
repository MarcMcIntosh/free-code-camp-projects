import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { recipeEdit } from '../actions';
import WelcomeMessage from './WelcomeMessage';
import Recipe from './Recipe';

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
      return (<section className="recipe"> Recipe form</section>);
    }
    return (<Recipe {...recipes[active]} onEdit={() => {}} onDelete={() => {}} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
