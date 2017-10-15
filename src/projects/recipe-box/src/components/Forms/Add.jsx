import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

/* you could write this to deal with both adding and edditing */
const validate = (values) => {
  const errors = {}
  if (!values.name) { errors.name = 'Required'; }
  return errors
}
/*
const warn = ({ ingredients, ...values }) => {
  const warnings = {};
  if (ingredients.length < 1) {
    warnings.ingredients = 'making something from nothing?'
  }
  return warnings
}*/

const Add = ({ handleSubmit }) => (<form onSubmit={handleSubmit}>
  <Field name="name" component="input" type="text" />
</form>);

Add.propTypes = { handleSubmit: func.isRequired };

export default reduxForm({
  form: 'create-recipe',
})(Add);
