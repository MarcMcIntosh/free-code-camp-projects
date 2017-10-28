import React from 'react';
import { Field, propTypes } from 'redux-form';

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

Ingredients.propTypes = { ...propTypes };

export default Ingredients;
