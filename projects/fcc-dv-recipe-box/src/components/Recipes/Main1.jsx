import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Button, { Menu as MenuButton } from '../Buttons';
import { recipeView, recipeEdit, recipeAdd, recipeDelete } from '../../actions';
import RecipeForm from '../Form/index';
import Recipe from './Recipe';
import Front from './Front';
import Isolated from '../Form/Isolated';

const mapStateToProps = state => ({
  edit: state.edit,
  active: state.active,
  recipes: state.recipes,
});

const mapDispatchToProps = dispatch => ({
  setViewTo: event => dispatch(recipeView(event.target.value)),
  onEdit: () => dispatch(recipeEdit()),
  onSave: values => dispatch(recipeAdd(values)),
  onDelete: n => dispatch(recipeDelete(n)),
});


class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleView = this.handleView.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }
  handleSumbit(event) {
    this.props.onSave(event);
  }
  handleDelete(n) {
    this.props.onDelete(n);
  }
  handleEdit() {
    this.props.onEdit();
  }
  handleView(event) {
    this.props.setViewTo(event.target.value);
  }
  editRecipe() {
    const recipe = this.props.recipes[this.props.active];
    if (this.props.active >= 0) {
      return (<RecipeForm {...recipe} />);
    }
    return (<RecipeForm />);
  }
  render() {
    const { recipes, active, edit, ...props } = this.props;
    const editRecipe = this.editRecipe();
    return (<div className={props.className}>
      <section className="vertical-tabs">
        <MenuButton
          className="vertical-tab"
          title="menu" value={-1}
          onClick={this.handleView}
          disabled={active === -1}
        />
        {recipes.map((d, i) => {
          const { name } = d;
          const k = `${name}:${i}`;
          return (<Button
            key={k} title={name}
            value={i} onClick={this.handleView} className="vertical-tab"
          >{name}</Button>);
        })}
      </section>

      <section className="vertical-tab-content-container">
        {(edit) ? editRecipe : false }

        {(!edit && active >= 0) ? (<Recipe
          className="vertical-tab-content"
          {...recipes[active]}
          onDelete={() => this.handleDelete(active)}
          onEdit={this.handleEdit}
        />) : (<Front isEmpty={recipes.length === 0} onAdd={this.handleEdit} />)}
      </section>
      <h1>Isolated</h1>
    </div>);
  }
}


const { func, array, number, bool } = PropTypes;

Main.propTypes = {
  setViewTo: func.isRequired,
  recipes: array.isRequired,
  active: number.isRequired,
  edit: bool.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  onSave: func.isRequired,
};

Main.defaultProps = { className: 'vertical-tabs-container' };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
