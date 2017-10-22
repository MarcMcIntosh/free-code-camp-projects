import React from 'react';
// import { func } from 'prop-types';
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form';
import { warn, validate } from './Form/validate';
import renderIngredients from './Form/Ingredients';
import renderInstructions from './Form/Instructions';
import renderPicture from './Form/Picture';
import InputRequired from './Form/InputRequired';

const RecipeForm = ({ handleSubmit, pristine, reset, submitting }, { classnames }) => (<form
  className={classnames('recipe-box-form')}
  onSubmit={handleSubmit}
>

  <Field label="Name of Recipe" name="name" component={InputRequired} type="text" />

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
