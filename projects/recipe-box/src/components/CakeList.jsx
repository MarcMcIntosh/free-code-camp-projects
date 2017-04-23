import React from 'react';
import PropTypes from 'prop-types';
import CakeItem from './CakeItem';

const CakeList = ({
  cakes,
  onEdit,
  onRemove,
  ...props
}) => (<div className="bpc__list" {...props}>
  {cakes.map((d, i) => {
    const str = `${d.title}-${i}`;
    return (<CakeItem
      key={str}
      cake={d}
      onEdit={() => onEdit(i)}
      onRemove={() => onRemove(i)}
    />);
  })}
</div>);

const { array, func, number } = PropTypes;
CakeList.propTypes = {
  cakes: array.isRequired,
  onEdit: func.isRequired,
  onRemove: func.isRequired,
  editting: number.isRequired,
};

export default CakeList;
