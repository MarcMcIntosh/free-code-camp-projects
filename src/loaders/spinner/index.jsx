import React from 'react';
import classnames from 'classnames/bind';
import styles from './spinner.scss';

const cx = classnames.bind(styles);

const Spinner = () => (<div className={cx('loader')} />);

export default Spinner;
