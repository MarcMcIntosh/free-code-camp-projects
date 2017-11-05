import React from 'react';
import { func, string, array, shape } from 'prop-types';

const Recipe = ({
  recipe: { title, image, ingredients, preparation, desc },
  onEdit,
  onDelete,
}, {
  classnames,
}) => (<div className={classnames('recipe-box-recipe')}>
  <header className={classnames('recipe-box-recipe__header')}>
    <h1 className={classnames('recipe-box-recipe__title')}>{title}</h1>
    <h2 className={classnames('recipe-box-recipe__subtitle')}>{desc}</h2>

    <hr />

  </header>
  <div className={classnames('recipe-box-recipe__horizontal-block')}>

    <div className={classnames('recipe-box-recipe__media')}>
      <img src={image} alt="" className={classnames('recipe-box-recipe__image')} />
    </div>

    <table className={classnames('recipe-box-recipe__ingredients')}>
      <tr><th className={classnames('recipe-box-recipe__heading')}>Ingredients</th></tr>
      {ingredients.map((d, i) => {
        const k = `ingredient:${i}`;
        return (<tr key={k}><td className={classnames('recipe-box-recipe__ingredient')}>{d}</td></tr>);
      })}
    </table>
  </div>

  <section className={classnames('recipe-box-recipe__supporting-text')}>
    <hr />
    <h2 className={classnames('recipe-box-recipe__heading')}>Preparation notes</h2>
    {preparation}
    <hr />
  </section>

  <section className={classnames('recipe-box-recipe__actions')}>
    <button tabIndex="0" className={classnames('recipe-box-recipe__action', 'recipe-box-recipe__action--primary')} onClick={onEdit} title="Edit this recipe">Edit</button>
    <button tabIndex="0" className={classnames('recipe-box-recipe__action', 'recipe-box-recipe__action--accent')} onClick={onDelete} title="Delete this recipe">Delete</button>
  </section>
</div>);

Recipe.propTypes = {
  recipe: shape({
    title: string,
    image: string,
    ingredients: array,
    preparation: string,
    desc: string,
  }),
  onEdit: func.isRequired,
  onDelete: func.isRequired,
};

Recipe.defaultProps = {
  recipe: {
    title: '',
    image: '',
    desc: '',
    ingredients: [],
    preparation: '',
  },
};

Recipe.contextTypes = { classnames: func.isRequired };

export default Recipe;
