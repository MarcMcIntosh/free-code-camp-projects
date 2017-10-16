import React from 'react';
import { Field, propTypes } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (<div className="recipe-box__ingredient">
  <label htmlFor={input.name}>{label}</label>
  <div>
    <input {...input} type={type} placeholder={label} />
    {touched && error && <span>{error}</span>}
  </div>
</div>);

const renderIngredients = ({ fields, meta: { error } }) => (<ul className="recipe-box__ingredients">
  <li>
    <button type="button" onClick={() => fields.push()}>Add An Ingredient</button>
  </li>

  {fields.map((d, i) => (<li key={d || i}>
    <button type="button" title="Remove Ingredient" onClick={() => fields.remove(i)} />
    <Field name={d} type="text" component={renderField} label={`Ingredient #${i + 1}`} />
  </li>))}

  {error && <li className="error">{error}</li>}
</ul>);

renderField.propTypes = { ...propTypes };
renderIngredients.propTypes = { ...propTypes };

export default renderIngredients;
