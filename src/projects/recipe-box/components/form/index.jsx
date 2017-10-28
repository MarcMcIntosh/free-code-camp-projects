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

  <Field name="title" type="text" component="input" placeholder="Name for recipe" label="Recipe" />

  <Field name="desc" component="textarea" type="text" placeholder="Description of the recipe" label="Description" />

  <label htmlFor="ingredients">Ingredients</label>
  <FieldArray name="ingredients" component={Ingredients} />

  <Field name="preparation" component="textarea" type="text" placeholder="Instructions for recipe" label="Instructions" />

  <button tabIndex="0" className={classnames('recipe-box-form__button')} type="submit" disabled={pristine || submitting}>
    Submit
  </button>

  <button tabIndex="0" className={classnames('recipe-box-form__button')} disabled={pristine || submitting} onClick={reset}>
    Clear Values
  </button>
</form>);

RecipeForm.propTypes = { ...propTypes };
RecipeForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'recipe-form',
})(RecipeForm);
