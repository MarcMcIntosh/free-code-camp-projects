import React from 'react';
import { func, string, array } from 'prop-types';

const Recipe = ({
  name,
  ingredients,
  _id,
  picture,
  cx,
  onEdit,
  onDelete,
}) => (<div className={cx('recipe-box-recipe')}>

  <section className={cx('recipe-box-recipe__content')}>
    <div className={cx('recipe-box-recipe__primary')}>
      <h1 className={cx('recipe-box-recipe__title')}>{name}</h1>
      <h2 className={cx('recipe-box-recipe__subtile')}>
        <ul>{ingredients.map((d, i) => {
          const k = `recipe:${_id}:ingredient:${i}`;
          return (<li key={k}>{d}</li>);
        })}</ul>
      </h2>
    </div>

    <img className={cx('recipe-box-recipe__media-item')} src={picture} alt="" />

  </section>


  <div className={cx('recipe-box-recipe__actions')}>

    <button type="button" title="edit recipe" value={_id} onClick={onEdit} className={cx('recipe-box-recipe__action')}>
      Edit
    </button>

    <button type="button" title="remove recipe" value={_id} className={cx('recipe-box-recipe__action')} onClick={onDelete}>
     Delete
    </button>
  </div>
</div>);

Recipe.propTypes = {
  cx: func.isRequired,
  name: string.isRequired,
  ingredients: array,
  _id: string.isRequired,
  picture: string.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
};

Recipe.defaultProps = { ingredients: [] };

export default Recipe;
