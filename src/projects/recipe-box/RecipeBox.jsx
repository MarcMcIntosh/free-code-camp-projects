import React from 'react';
import { connect } from 'react-redux';
import { func, bool, number, array } from 'prop-types';
import ReactModal from 'react-modal';
import RecipeForm from './components/form';
import Menu from './components/menu';
// import Recipe from './components/recipe';

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
  onRead: n => dispatch(readRecipe(+n)),
  onDelete: n => dispatch(deleteRecipe(+n)),
});

const RecipeBox = ({
  editting,
  reading,
  onCreate,
  recipes,
  onUpdate,
  onRead,
  // onDelete,
}, {
  classnames,
}) => (<div className={classnames('recipe-box')}>

  <Menu recipes={recipes} onRead={onRead} onCreate={() => onCreate(true)} />

  <ReactModal
    isOpen={editting || reading >= 0}
    onRequestClose={(event) => {
      event.preventDefault();
      onCreate(false);
      onRead(-1);
    }}
    contentLabel={(editting) ? 'Recipe Form' : 'Recipe'}
  >
    {(editting) ? (<RecipeForm
      initialValues={(reading >= 0) ? recipes[reading] : {}}
      onSubmit={values => onUpdate({ index: reading, values })}
      onCancel={() => onCreate(false)}
    />) : (<div>
      recipe
      {/* <Recipe
        recipe={reading >= 0 ? recipes[reading] : {}}
        onEdit={() => onCreate(true)}
        onDelete={() => onDelete(reading)}
      /> */}
    </div>)}

  </ReactModal>
</div>);

RecipeBox.propTypes = {
  onCreate: func.isRequired,
  onRead: func.isRequired,
  onUpdate: func.isRequired,
  //  onDelete: func.isRequired,
  editting: bool.isRequired,
  reading: number.isRequired,
  recipes: array.isRequired,
};

RecipeBox.contextTypes = {
  classnames: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
