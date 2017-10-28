import React from 'react';
import { func } from 'prop-types';
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form';
import Ingredients from './Ingredients';

/* form fields
* title: string
* desc: string
* image: string
* ingredients: array [ strngs ];
* preparation: string
*/

const RecipeForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
}, {
  classnames,
}) => (<form onSubmit={handleSubmit} className={classnames('recipe-box-form')}>

  <label htmlFor="title">Recipe</label>
  <Field name="title" type="text" component="input" placeholder="Name for recipe" />

  <label htmlFor="desc">Description</label>
  <Field name="desc" component="textarea" type="text" placeholder="Description of the recipe" />

  <label htmlFor="ingredients">Ingredients</label>
  <FieldArray name="ingredients" component={Ingredients} />

  <label htmlFor="preparation">Instructions</label>
  <Field name="preparation" component="textarea" tpe="text" placeholder="Instructions for recipe" />

  <button type="submit" disabled={pristine || submitting}>
    Submit
  </button>

  <button type="button" disabled={pristine || submitting} onClick={reset}>
    Clear Values
  </button>
</form>);

RecipeForm.propTypes = { ...propTypes };
RecipeForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'recipe-form',
})(RecipeForm);
