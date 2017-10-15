import React from 'react';
// import { func } from 'prop-types';
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form';
import { warn, validate } from './validate';
import renderIngredients from './Ingredients';
import renderInstructions from './Instructions';
import renderPicture from './Picture';

const RecipeForm = ({ handleSubmit, pristine, reset, submitting }) => (<form onSubmit={handleSubmit}>

  <Field name="name" component="input" type="text" />

  <Field name="picture" type="text" component={renderPicture} />

  <FieldArray name="ingredients" component={renderIngredients} />

  <Field name="instructions" component={renderInstructions} />

  <button type="submit" disabled={submitting}>
    Submit
  </button>

  <button type="button" disabled={pristine || submitting} onClick={reset}>
    Clear Values
  </button>

</form>);

RecipeForm.propTypes = { ...propTypes };

export default reduxForm({
  form: 'create-recipe',
  // apply initialValues as a prop if need be
  warn,
  validate,
})(RecipeForm);
