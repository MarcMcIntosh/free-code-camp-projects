import React from 'react';
import PropTypes from 'prop-types';

const CakeItem = ({
  cake,
  onEdit,
  onRemove,
  ...props
}) => (<div {...props}>
  <div className="bpc__buttons">
    <button onClick={onEdit}>edit</button>
    <button onClick={onRemove}>rm</button>
  </div>
  <h1>{cake.title}</h1>
  <h2>{cake.desc}</h2>
  <img src={cake.image} alt={cake.title} />
</div>);

const { string, func, shape } = PropTypes;
CakeItem.propTypes = {
  cake: shape({ title: string, desc: string, image: string }).isRequired,
  onEdit: func.isRequired,
  onRemove: func.isRequired,
};

export default CakeItem;
