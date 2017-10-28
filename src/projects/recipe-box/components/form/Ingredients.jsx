import React from 'react';
import { Field } from 'redux-form';
import { any, bool, string, shape, func, number } from 'prop-types';

const Ingredients = ({
  fields,
  meta: { error },
}) => (<ul>
  <li>
    <button type="button" onClick={() => fields.push()}>Add Ingredient</button>
  </li>
  {fields.map((ingredient, index) => {
    const k = `ingredient:${index}`;
    return (<li key={k}>
      <button type="button" title="Remove ingredient" onClick={() => fields.remove(index)} />

      <Field name={ingredient} type="text" component="input" />
    </li>);
  })}
  {error && <li className="error">{error}</li>}
</ul>);

Ingredients.propTypes = {
  fields: shape({
    name: string.isRequired,
    forEach: func.isRequired,
    get: func.isRequired,
    getAll: func.isRequired,
    insert: func.isRequired,
    length: number.isRequired,
    map: func.isRequired,
    move: func.isRequired,
    pop: func.isRequired,
    push: func.isRequired,
    reduce: func.isRequired,
    remove: func.isRequired,
    removeAll: func.isRequired,
    shift: func.isRequired,
    swap: func.isRequired,
    unshift: func.isRequired,
  }).isRequired,
  meta: shape({
    dirty: bool.isRequired,
    error: any,
    form: string.isRequired,
    invalid: bool.isRequired,
    pristine: bool.isRequired,
    submitFailed: bool,
    submitting: bool,
    valid: bool.isRequired,
    warning: string,
  }).isRequired,
};


export default Ingredients;
