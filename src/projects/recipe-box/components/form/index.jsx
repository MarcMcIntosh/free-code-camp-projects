import React from 'react';
import { func } from 'prop-types';
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form';
import Ingredients from './Ingredients';
import FileInput from './FileInput';
import TextField from './TextField';
import validate from './validate';
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
  {/* using mdc-layout grid could solve alot of these problems */}
  {/* or apply a sutiable classname to the container and use unclassed elements */}
  <div className={classnames('recipe-box-form__inner')}>

    <div className={classnames('recipe-box-form__primary')}>
      <h1 className={classnames('recipe-box-form__title')}>New Recipe</h1>

      <Field name="title" type="text" component={TextField} label="Title" />

      <Field name="desc" component={TextField} type="text" placeholder="Description of the recipe" label="Description" />

    </div>

    <div className={classnames('recipe-box-form__media')}>
      <Field name="image" label="Upload Picture" component={FileInput} />
    </div>
  </div>

  <FieldArray name="ingredients" component={Ingredients} />

  <Field name="preparation" component="textarea" type="text" placeholder="Instructions for recipe" label="Instructions" />

  <div className={classnames('recipe-box-form__actions')}>
    <button tabIndex="0" className={classnames('recipe-box-form__action')} type="submit" disabled={pristine || submitting}>Submit</button>

    <button tabIndex="0" className={classnames('recipe-box-form__action')} disabled={pristine || submitting} onClick={reset}>Clear Values</button>
  </div>
</form>);

RecipeForm.propTypes = { ...propTypes };
RecipeForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'recipe-form',
  validate,
})(RecipeForm);
