import React from 'react';
import { func } from 'prop-types';
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form';
import { warn, validate } from './Form/validate';
import renderIngredients from './Form/Ingredients';
import renderInstructions from './Form/Instructions';
import renderPicture from './Form/Picture';
import InputRequired from './Form/InputRequired';

const RecipeForm = ({ cx, handleSubmit, pristine, reset, submitting }) => (<form
  className={cx('recipe-box-form')}
  onSubmit={handleSubmit}
>

  <Field cx={cx} label="Name of Recipe" name="name" component={InputRequired} type="text" />

  <Field cx={cx} name="picture" type="text" component={renderPicture} />

  <FieldArray cx={cx} name="ingredients" component={renderIngredients} />

  <Field cx={cx} name="instructions" component={renderInstructions} />

  <button tabIndex="0" className={cx('recipe-box-button')} type="submit" disabled={submitting}>
    Submit
  </button>

  <button tabIndex="0" classNames={cx('recipe-box-button')} type="button" disabled={pristine || submitting} onClick={reset}>
    Clear Values
  </button>

</form>);

RecipeForm.propTypes = {
  cx: func.isRequired,
  ...propTypes,
};

export default reduxForm({
  form: 'create-recipe',
  // apply initialValues as a prop if need be
  warn,
  validate,
})(RecipeForm);
