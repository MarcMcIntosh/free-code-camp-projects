import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import { Add, Delete } from '../Buttons';

const Ingredient = ({
  fields,
  meta: { touched, error },
}) => (<ul>
  <li>
    <Add title="Add Ingredient" onClick={() => fields.push({})} />
    {touched && error && <span>{error}</span>}
  </li>
  {fields.map((item, index) => {
    const name = `${item}.name`;
    const quantity = `${item}.quantity`;
    return (<li>
      <Delete title="Remove Ingredient" onClick={() => fields.remove(index)} />
      <label htmlFor={name}>Ingredient</label>
      <Field name={name} type="text" component="input" />
      <label htmlFor={quantity}>Quantity</label>
      <Field name={quantity} type="number" component="input" />
    </li>);
  })}
  {error && <li className="error">{error}</li>}
</ul>);

const { func, shape, any, bool } = PropTypes;
Ingredient.propTypes = {
  fields: shape({
    push: func.isRequired,
    remove: func.isRequired,
    map: func.isRequired,
  }).isRequired,
  meta: shape({
    touched: bool.isRequired,
    error: any,
  }).isRequired,
};

export default Ingredient;
