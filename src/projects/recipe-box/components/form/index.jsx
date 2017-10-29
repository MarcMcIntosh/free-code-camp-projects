import React from 'react';
import { func } from 'prop-types';
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form';
import Ingredients from './Ingredients';
import FileInput from './FileInput';

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
  <div className={classnames('recipe-box-form__horizontal-block')}>
    <div className={classnames('recipe-box-form__primary')}>
      <Field name="title" type="text" component="input" placeholder="Name for recipe" label="Recipe" />

      <Field name="desc" component="textarea" type="text" placeholder="Description of the recipe" label="Description" />

      <div>
        <FieldArray name="ingredients" component={Ingredients} />
      </div>
      
    </div>

    <Field name="image" label="Upload Picture" component={FileInput} />


    <div>
      <Field name="preparation" component="textarea" type="text" placeholder="Instructions for recipe" label="Instructions" />
    </div>

    <div className={classnames('recipe-box-form__actions')}>
      <button tabIndex="0" className={classnames('recipe-box-form__action')} type="submit" disabled={pristine || submitting}>Submit</button>

      <button tabIndex="0" className={classnames('recipe-box-form__action')} disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </div>
  </div>
</form>);

RecipeForm.propTypes = { ...propTypes };
RecipeForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'recipe-form',
})(RecipeForm);
