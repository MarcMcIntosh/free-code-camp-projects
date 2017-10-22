import React from 'react';
import { bool, func, string, object } from 'prop-types';
import { connect } from 'react-redux';

// import Modal from 'react-modal';
// import Editor from './components/Editor';
// import Recipe from './components/Recipe';
import AddButton from './components/Buttons/AddButton';
import Menu from './components/Menu';

import {
  // createRecipe,
  readRecipe,
  updateRecipe,
  deleteRecipe,
  toggleEdit,
} from './actions';

/* <Modal isOpen={active || edit}>{(edit) ? (<Editor cx={cx} initialValues={active ? recipes[active] : {}} onSubmit={onSubmit} />) : (<Recipe cx={cx} name={recipes[active].name} picture={recipes[active].picture} ingredients={recipes[active].ingredients} onEdit={onEdit} onDelete={onDelete} />)}</Modal> */


const mapStateToProps = ({ recipeBox }) => ({
  recipes: recipeBox.recipes,
  active: recipeBox.active,
  edit: recipeBox.edit,
});

const mapDispatchToProps = dispatch => ({
  onRead: event => dispatch(readRecipe(event.target.value)),
  onEdit: () => dispatch(toggleEdit()),
  onDelete: event => dispatch(deleteRecipe(event.target.value)),
  onSubmit: values => dispatch(updateRecipe(values)),
});

const RecipeBox = ({
  recipes,
  active,
  edit,
  cx,
  onEdit,
  onRead,
  onDelete,
  onSubmit,
}) => (<div className={cx('recipe-box')}>
  <AddButton cx={cx} onClick={onEdit} />
  <button onClick={onDelete}>remove</button>
  {/* add some header here */}
  
  {/* List of recipes */}
  <Menu recipes={recipes} onClick={onRead} cx={cx} />
</div>);

RecipeBox.propTypes = {
  recipes: object.isRequired,
  active: string.isRequired,
  edit: bool.isRequired,
  cx: func.isRequired,
  onSubmit: func.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  onRead: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
