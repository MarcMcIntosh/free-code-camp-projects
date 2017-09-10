import React from 'react';
import cx from '../styles';
import IMG_SRC from '../images/Season_6_hodor_main.jpg';

const Home = () => (<div className={cx('tribute__page')}>
  <h2 className={cx('tribute__title')}>Hodor</h2>
  <img alt="Hodor" className={cx('tribute__image')} src={IMG_SRC} />
  <div className={cx('tribute__caption')}>
    <h3>Valar Morghulis</h3>
    <a
      href="http://gameofthrones.wikia.com/wiki/Hodor"
      target="_blank"
      rel="noopener noreferrer"
      className={cx('tribute__link')}
    >Game of Thrones</a>
  </div>
</div>);

export default Home;
