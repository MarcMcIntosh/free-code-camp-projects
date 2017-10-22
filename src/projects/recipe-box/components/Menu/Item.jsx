import React from 'react';
import { string, func } from 'prop-types';

const MenuItem = ({ name, cx, onClick, picture, ...props }) => (<li role="menuitem" className={cx('recipe-box-tile')} onClick={onClick} {...props}>
  <div className={cx('recipe-box-tile__primary')}>
    <img className={cx('recipe-box-tile__primary-content')} src={picture} alt="" />
  </div>

  <span className={cx('recipe-box-tile__secondary')}>
    <span className={cx('recipe-box-tile__title')}>
      {name}
    </span>
  </span>
</li>);

MenuItem.propTypes = {
  _id: string.isRequired,
  name: string.isRequired,
  picture: string.isRequired,
  cx: func.isRequired,
  onClick: func.isRequired,
};

export default MenuItem;
