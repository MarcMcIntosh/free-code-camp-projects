import React from 'react';

const Recipe = (recipe, { classnames }) => (<div className={classnames('recipe-box-recipe')}>

  <section className={classnames('recipe-box-recipe__content')}>
    <div className={classnames('recipe-box-recipe__primary')}>
      <h1 className={classnames('recipe-box-recipe__title')}>{recipe.name}</h1>
      <h2 className={classnames('recipe-box-recipe__subtile')}>
        <ul>{recipe.ingredients.map((d, i) => {
          const k = `recipe:${recipe._id}:ingredient:${i}`;
          return (<li key={k}>{d}</li>);
        })}</ul>
      </h2>
    </div>

    <img className={classnames('recipe-box-recipe__media-item')} src={recipe.picture} alt="" />

  </section>


  <div className={classnames('recipe-box-recipe__actions')}>

    <button type="button" title="edit recipe" value={recipe._id} onClick={recipe.onEdit} className={classnames('recipe-box-recipe__action')}>
      Edit
    </button>

    <button type="button" title="remove recipe" value={recipe._id} className={classnames('recipe-box-recipe__action')}>
     Delete
    </button>
  </div>
</div>);

export default Recipe;
