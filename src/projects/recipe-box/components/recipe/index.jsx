import React from 'react';
import { func, string, array } from 'prop-types';

const Recipe = ({
  title,
  image,
  ingredients,
  preparation,
  onEdit,
  onDelete,
}, {
  classnames,
}) => (<div className={classnames('recipe-box-modal__recipe')}>
  <section classNames={classnames('recipe-box-modal__primary')}>
    <h1 className={classnames('recipe-box-modal__title')}>{title}</h1>
    <h2 className={classnames('recipe-box-modal__subtitle')}>Ingredients</h2>
    <ul className={classnames('recipe-box-modal__ingredients')}>
      {ingredients.map((d, i) => {
        const k = `ingredient:${i}`;
        return (<li key={k} className={classnames('recipe-box-modal__ingredient')}>{d}</li>);
      })}
    </ul>
    <img src={image} alt="" className={classnames('recipe-box-modal__image')} />
  </section>


  <section className={classnames('recipe-box-modal__preparation')}>{preparation}</section>

  <section className={classnames('recipe-box-modal__actions')}>
    <button tabIndex="0" className={classnames('recipe-box-modal__action')} onClick={onEdit} title="Edit this recipe">Edit</button>
    <button tabIndex="0" className={classnames('recipe-box-modal__action')} onClick={onDelete} title="Delete this recipe">Delete</button>
  </section>
</div>);

Recipe.propTypes = {
  title: string,
  image: string,
  ingredients: array,
  preparation: string,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
};

Recipe.defaultProps = { title: '', image: '', ingredients: [], preparation: '' };

Recipe.contextTypes = { classnames: func.isRequired };

export default Recipe;
