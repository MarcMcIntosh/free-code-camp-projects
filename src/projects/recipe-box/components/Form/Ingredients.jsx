import React from 'react';
import { Field, propTypes } from 'redux-form';
import { func } from 'prop-types';
import renderField from './InputField';

/* const renderField = ({ input, label, type, meta: { touched, error } }) => (<div className="recipe-box__ingredient">
  <label htmlFor={input.name}>{label}</label>
  <div>
    <input {...input} type={type} placeholder={label} />
    {touched && error && <span>{error}</span>}
  </div>
</div>);
*/

const renderIngredients = ({ cx, fields, meta: { error } }) => (<ul className="recipe-box__ingredients">
  <li>
    <button type="button" onClick={() => fields.push()}>Add An Ingredient</button>
  </li>

  {fields.map((d, i) => (<li key={d || i}>
    <button type="button" title="Remove Ingredient" onClick={() => fields.remove(i)} />
    <Field cx={cx} name={d} type="text" component={renderField} label={`Ingredient #${i + 1}`} />
  </li>))}

  {error && <li className="error">{error}</li>}
</ul>);

renderIngredients.propTypes = {
  cx: func.isRequired,
  ...propTypes,
};

export default renderIngredients;
