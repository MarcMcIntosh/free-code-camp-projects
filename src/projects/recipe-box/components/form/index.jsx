import React from 'react';
import { func } from 'prop-types';
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form';
import Ingredients from './Ingredients';
import FileInput from './FileInput';
import TextField from './TextField';
import validate from './validate';

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

    <div className={classnames('recipe-box-form__primary')}>
      <FieldArray name="ingredients" component={Ingredients} />
    </div>

    <div className={classnames('recipe-box-form__primary')}>
      <h2 className={classnames('recipe-box-form__title')}>Instructions</h2>

      <Field name="preparation" rows="8" cols="40" className={classnames('recipe-box-form__textarea')} component="textarea" placeholder="Instructions for cooking recipe" />

    </div>
  </div>

  {/* <div className={classnames('recipe-box-form__inner')} /> */}

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
