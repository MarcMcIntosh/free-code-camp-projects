import React from 'react';

/* default for item
#example .mdc-card__media {
  background-image: url("pretty.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 90px;
} */

const RecipeListItem = recipe => (<li
  role="presentation"
  onClick={recipe.onClick}
  className="recipe-box__item"
  style={recipe.picture ? {
    backgroundImage: `url(${recipe.picture})`,
  } : {}}
>
  <span className="recipe-box__name">{recipe.name}</span>
</li>);

export default RecipeListItem;
