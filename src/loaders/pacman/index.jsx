import React from 'react';
import classnames from 'classnames/bind';
import styles from './pacman.scss';

const cx = classnames.bind(styles);

const pacman = () => (<div className={cx('loader')}>
  <div className={cx('loader__pacman')} />
  <div className={cx('loader__dot')} />
</div>);

export default pacman;
