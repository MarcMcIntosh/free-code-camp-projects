import React from 'react';
import { bool, func, string, object } from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Editor from './components/Editor';
import Recipe from './components/Recipe';

import {
  recipeView,
  recipeDelete,
  toggleEdit,
} from './actions';


const mapStateToProps = state => ({
  recipes: state.recipes,
  active: state.active,
  edit: state.edit,
});

const mapDispatchToProps = dispatch => ({
  // onToggleMenu: () => dispatch(toggleMenu()),
  onView: event => dispatch(recipeView(event.target.value)),
  // onEdit: values => dispatch(recipeEdit(values)),
  onEdit: () => dispatch(toggleEdit()),
  onDelete: event => dispatch(recipeDelete(event.target.value)),
});

const RecipeBox = ({
  onView,
  recipes,
  active,
  edit,
  onEdit,
  onDelete,
  onSubmit,
}, {
  classnames,
}) => (<div className={classnames('recipe-box')}>
  {/* Modal */}
  <Modal isOpen={active || edit}>{
    (edit) ? (<Editor
      initialValues={active ? recipes[active] : {}}
      onSubmit={onSubmit}
    />) : (<Recipe
      name={recipes[active].name}
      picture={recipes[active].picture}
      ingredients={recipes[active].ingredients}
      onEdit={onEdit}
      onDelete={onDelete}
    />)
  }</Modal>

  {/* Add button */}
  <button onClick={onEdit}>Add one</button>
  {/* List of recipes */}
  <div className={classnames('recipe-box-menu')}>
    <ul role="menu" className={classnames('recipe-box-menu__tiles')}>{
      Object.keys(recipes).map((recipe) => {
        const { _id, name, picture } = recipes[recipe];
        return (<li key={_id} value={_id} role="menuitem" className={classnames('recipe-box-tile')} onClick={onView}>
          <div className={classnames('recipe-box-tile__primary')}>
            <img className={classnames('recipe-box-tile__primary-content')} src={picture} alt="" />
          </div>

          <span className={classnames('recipe-box-tile__secondary')}>
            <span className={classnames('recipe-box-tile__title')}>
              {name}
            </span>
          </span>
        </li>);
      })
    }</ul>
  </div>
</div>);

RecipeBox.propTypes = {
  onSubmit: func.isRequired,
  onView: func.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  recipes: object.isRequired,
  active: string.isRequired,
  edit: bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
