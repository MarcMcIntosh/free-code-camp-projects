import React from 'react';
import { Field } from 'redux-form';
import { any, bool, string, shape, func, number } from 'prop-types';
import renderIngredient from './renderIngredient';

const Ingredients = ({
  fields,
  meta: { error },
}, {
  classnames,
}) => (<div>
  <section>
    <h4>Ingredients</h4><button
      className={classnames('recipe-box-form__button--icon')}
      title="Add Ingredient"
      type="button"
      tabIndex="0"
      onClick={() => fields.push()}
    >playlist_add</button>
  </section>

  {fields.map((ingredient, index) => {
    const k = `ingredients[${index}]`;
    return (<Field key={k} name={k} type="text" component={renderIngredient} label={`Ingredients #${index + 1}`} onClick={() => fields.remove(index)} />);
  })}
  {error && <span className="error">{error}</span>}
</div>);

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

Ingredients.contextTypes = {
  classnames: func.isRequired,
};

export default Ingredients;
