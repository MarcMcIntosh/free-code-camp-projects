import React from 'react';
import { number, string, func } from 'prop-types';

const Item = ({
  value,
  title,
  desc,
  image,
  onClick,
  ...props
}, {
  classnames,
}) => (<div
  className={classnames('recipe')}
  style={(image) ? { backgroundImage: `url(${image})` } : {}}
  {...props}
>
  <section className={classnames('recipe__content')}>

    <h1 className={classnames('recipe__title')} >
      {title}
    </h1>

    <h2 className={classnames('recipe__subtitle')}>
      {desc}
    </h2>

  </section>

  <section className={classnames('recipe__actions')}>

    <button
      tabIndex="0"
      className={classnames('recipe__action')}
      onClick={onClick}
      value={value}
      title="View this Recipe"
    >View</button>

  </section>
</div>);

Item.propTypes = {
  value: number.isRequired,
  title: string.isRequired,
  desc: string.isRequired,
  image: string,
  onClick: func.isRequired,
};

Item.defaultProps = { image: '' };

Item.contextTypes = { classnames: func.isRequired };

export default Item;
