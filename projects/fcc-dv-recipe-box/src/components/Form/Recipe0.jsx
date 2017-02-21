import React, { PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import Ingredient from './Ingredient';
import { Done, Cancel } from '../Buttons';


/* http://redux-form.com/6.4.3/docs/api/Props.md/
use initialize(data:Object) to edit an entry */
const Recipe = ({
  submitting,
  pristine,
  reset,
}) => (<form action="" method="" >
  <div>
    <label htmlFor="name">Recipe Name</label>
    <Field name="name" component="input" type="text" placeholder="Recipe Name" />
    <FieldArray name="ingredients" component={Ingredient} />
  </div>
  <div>
    <Done type="submit" disabled={submitting} />
    <Cancel disabled={pristine || submitting} onClick={reset} />
  </div>
</form>);

const { func, bool } = PropTypes;
Recipe.propTypes = {
  pristine: bool.isRequired,
  reset: func.isRequired,
  submitting: bool.isRequired,
};

export default reduxForm({
  form: 'recipe',
})(Recipe);
