import React from 'react';
import { string, func } from 'prop-types';

const Item = ({
  title,
  desc,
  image,
  ...props
}, {
  classnames,
}) => (<li title={desc} role="menuitem" className={classnames('recipe-box-menu-item')} {...props} >
  <div className={classnames('recipe-box-menu-item__primary')} >

    <div className={classnames('recipe-box-menu-item__image')} style={image ? { backgroundImage: `url(${image})` } : {}} />

  </div>

  <span className={classnames('recipe-box-menu-item__text')}>

    <span className={classnames('recipe-box-menu-item__title')}>{title}</span>

    <span className={classnames('recipe-box-menu-item__desc')}>{desc}</span>

  </span>
</li>);

Item.propTypes = {
  title: string.isRequired,
  desc: string.isRequired,
  image: string,
};

Item.defaultProps = { image: '' };

Item.contextTypes = { classnames: func.isRequired };

export default Item;
