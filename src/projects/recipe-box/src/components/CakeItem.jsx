import React from 'react';
import PropTypes from 'prop-types';

const CakeItem = ({
  cake,
  onEdit,
  onRemove,
}) => (<div
  className="mdc-card mdc-card--theme-dark bpc__cake"
  style={{ backgroundImage: `url(${cake.image})` }}
>
  <section className="mdc-card__primary bpc__content">
    <h1 className="mdc-card__title mdc-card__title--large">{cake.title}</h1>
    <h2 className="mdc-card__subtitle">{cake.desc}</h2>
  </section>
  <section className="mdc-card__actions bpc__content bpc__buttons">
    <button
      className="mdc-button mdc-button--theme-dark mdc-card__action"
      onClick={onEdit}
    >Edit</button>
    <button
      className="mdc-button mdc-button--theme-dark mdc-card__action" onClick={onRemove}
    >Delete</button>
  </section>
</div>);

const { string, func, shape } = PropTypes;
CakeItem.propTypes = {
  cake: shape({ title: string, desc: string, image: string }).isRequired,
  onEdit: func.isRequired,
  onRemove: func.isRequired,
};

export default CakeItem;
