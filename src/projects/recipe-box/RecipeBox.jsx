import React from 'react';
import { connect } from 'react-redux';
import { func, bool, number, array } from 'prop-types';
import ReactModal from 'react-modal';
import Header from './components/Header';
import RecipeForm from './components/form';
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
  onDelete: event => dispatch(deleteRecipe(+event.target.value)),
});

const RecipeBox = ({
  editting,
  reading,
  onCreate,
  recipes,
  onUpdate,
}, {
  classnames,
}) => (<div className={classnames('recipe-box')}>

  <Header onClick={() => onCreate(true)} />

  <main className="bpc__container">
    {/* <CakeList
      cakes={this.props.cakes}
      onEdit={this.props.onEditCake}
      onRemove={this.props.onRemoveCake}
    /> */}
  </main>

  <ReactModal
    isOpen={editting || reading >= 0}
    onRequestClose={() => onCreate(false)}
    contentLabel={(editting) ? 'Recipe Form' : 'Recipe'}
  >
    {(editting) ? (<RecipeForm
      initialValues={recipes[reading]}
      onSubmit={values => onUpdate({ index: reading, values })}
      onCancel={() => onCreate(false)}
    />) : (<div>Recipe content goes here</div>)}

  </ReactModal>
</div>);

RecipeBox.propTypes = {
  onCreate: func.isRequired,
  onUpdate: func.isRequired,
  editting: bool.isRequired,
  reading: number.isRequired,
  recipes: array.isRequired,
};

RecipeBox.contextTypes = {
  classnames: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
