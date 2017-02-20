import React, { PropTypes } from 'react';
import { Delete, Edit } from '../Buttons';

const Recipe = ({
  name,
  ingredients,
  onEdit,
  onDelete,
  ...props
}) => (<article {...props}>
  <header>
    <h1>{name}</h1>
    <Edit onClick={onEdit} />
    <Delete onClick={onDelete} />
  </header>
  <ul>{ingredients.map(ingredient => (
    <li key={ingredient.name}>{ingredient.quantity} {ingredient.name}</li>
  ))}
  </ul>
</article>);

const { string, func, number, arrayOf, shape } = PropTypes;
Recipe.propTypes = {
  name: string.isRequired,
  ingredients: arrayOf(
    shape({ name: name.isRequired, quantity: number.isRequired }).isRequired,
  ).isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
};
