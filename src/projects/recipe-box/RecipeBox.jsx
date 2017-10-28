import React from 'react';
import { connect } from 'react-redux';
import { func, bool, number, array } from 'prop-types';
import ReactModal from 'react-modal';
import Header from './components/Header';
import RecipeForm from './components/form';
import Menu from './components/menu';
import Recipe from './components/recipe';

import {
  createRecipe,
  updateRecipe,
  readRecipe,
  deleteRecipe,
} from './actions';

const mapStateToProps = ({
  recipeBox: { recipes, reading, editting },
}) => ({ recipes, reading, editting });

const mapDispatchToProps = dispatch => ({
  onCreate: payload => dispatch(createRecipe(payload)),
  onUpdate: payload => dispatch(updateRecipe(payload)),
  onRead: event => dispatch(readRecipe(+event.target.value)),
  onDelete: n => dispatch(deleteRecipe(+n)),
});

const RecipeBox = ({
  editting,
  reading,
  onCreate,
  recipes,
  onUpdate,
  onRead,
  onDelete,
}, {
  classnames,
}) => (<div className={classnames('recipe-box')}>

  <Header onClick={() => onCreate(true)} />

  <Menu className={classnames('recipes')} recipes={recipes} onClick={onRead} />

  <ReactModal
    isOpen={editting || reading >= 0}
    className={classnames('recipe-box-modal__content')}
    overlayClassName={classnames('recipe-box-modal__overlay')}
    onRequestClose={() => onCreate(false)}
    contentLabel={(editting) ? 'Recipe Form' : 'Recipe'}
  >
    {(editting) ? (<RecipeForm
      initialValues={recipes[reading]}
      onSubmit={values => onUpdate({ index: reading, values })}
      onCancel={() => onCreate(false)}
    />) : (<Recipe
      {...recipes[reading]}
      onEdit={() => onCreate(true)}
      onDelete={() => onDelete(reading)}
    />)}

  </ReactModal>
</div>);

RecipeBox.propTypes = {
  onCreate: func.isRequired,
  onRead: func.isRequired,
  onUpdate: func.isRequired,
  onDelete: func.isRequired,
  editting: bool.isRequired,
  reading: number.isRequired,
  recipes: array.isRequired,
};

RecipeBox.contextTypes = {
  classnames: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
