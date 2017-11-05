import React from 'react';
import { Field, fieldArrayPropTypes } from 'redux-form';
import { func } from 'prop-types';
import renderIngredient from './renderIngredient';

const Ingredients = ({
  fields,
  meta: { error },
  ...props
}, {
  classnames,
}) => (<div {...props}>
  <h2 className={classnames('recipe-box-form__title')}>Ingredients</h2>

  {fields.map((ingredient, index) => {
    const k = `ingredients[${index}]`;
    return (<Field key={k} name={k} type="text" component={renderIngredient} label={`Ingredient #${index + 1}`} onClick={() => fields.remove(index)} />);
  })}
  {error && <span className="error">{error}</span>}
  <button
    className={classnames('recipe-box__action')}
    title="Add Ingredient"
    type="button"
    tabIndex="0"
    onClick={() => fields.push()}
  >Add Ingredient
    <i className={classnames('recipe-box__action--icon')}>playlist_add</i>
  </button>
</div>);

Ingredients.propTypes = { ...fieldArrayPropTypes };

Ingredients.contextTypes = { classnames: func.isRequired };

export default Ingredients;
