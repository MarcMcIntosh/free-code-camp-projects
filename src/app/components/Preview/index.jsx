import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import classnames from 'classnames/bind';
import styles from './preview.scss';

const cx = classnames.bind(styles);

const Preview = ({
  title,
  challenge,
  url,
  media,
}) => (<div className={cx('card')}>

  <div className={cx('horizontal-block')}>
    <section className={cx('primary')}>
      <h1 className={cx('title')}>{title}</h1>
    </section>
    <img className={cx('media-item')} src={media} alt="" />
  </div>

  <div className={cx('actions')}>
    <Link className={cx('action')} to={url}>View</Link>
    <a className={cx('action')} href={challenge}>About</a>
  </div>
</div>);


Preview.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  challenge: string.isRequired,
  media: string.isRequired,
};

export default Preview;
