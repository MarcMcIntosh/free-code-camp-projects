import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button, { Menu as MenuButton } from '../Buttons';
import { recipeView, recipeEdit, recipeAdd, recipeDelete } from '../../actions';
import RecipeForm from '../Form/index';
import Recipe from './Recipe';
import Front from './Front';

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


const Main = ({
  setViewTo,
  recipes,
  active,
  edit,
  onEdit,
  onSave,
  onDelete,
  ...props
}) => (<div {...props}>
  <section className="vertical-tabs">
    <MenuButton
      className="vertical-tab"
      title="menu" value={-1}
      onClick={setViewTo}
      disabled={active === -1}
    />
    {recipes.map((d, i) => {
      const { name } = d;
      const k = `${name}:${i}`;
      return (<Button
        key={k} title={name}
        value={i} onClick={setViewTo} className="vertical-tab"
      >{name}</Button>);
    })}
  </section>
  <section className="vertical-tab-content-container">
    {(edit) ? (<RecipeForm
      className="vertical-tab-content" initialValues={recipes[active]}
      onDelete={() => onDelete(active)}
      onSubmit={onSave}
    />) : false }
    {(!edit && active >= 0) ? (<Recipe
      className="vertical-tab-content"
    />) : (<Front isEmpty={recipes.length === 0} onAdd={onEdit} />)}
  </section>
</div>);

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
