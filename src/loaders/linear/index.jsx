import React from 'react';
import classnames from 'classnames/bind';
import styles from './linear.scss';

const cx = classnames.bind(styles);

const Linear = () => (<div className={cx('loader')} role="progressbar">
  <div className={cx('loader__buffering-dots')} />
  <div className={cx('loader__buffer')} />
  <div className={cx('loader__primary')}>
    <span className={cx('loader__inner')} />
  </div>
  <div className={cx('loader__secondary')}>
    <span className={cx('loader__inner')} />
  </div>
</div>);

export default Linear;
