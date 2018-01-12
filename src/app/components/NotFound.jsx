import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import appData from '../../projects/portfolio/appData';
import styles from '../styles/NotFound.scss';

const cx = classnames.bind(styles);

const NotFound = ({ location }) => (<div className={cx('card')}>
  <section className={cx('card__primary')}>
    <h1 className={cx('card__title')}>Error</h1>
    <h2 className={cx('card__subtitle')}>{location} : not found</h2>
  </section>
  <section className={cx('card__supporting-text')}>
    Try one of
    <ul className={cx('list')}>
      {Object.entries(appData).map(([k, { url }]) => (<li key={k} className={cx('list-item')}>
        <Link to={url}>{url}</Link>
      </li>))}
    </ul>
  </section>
</div>);

NotFound.propTypes = { location: string.isRequired };

export default NotFound;
