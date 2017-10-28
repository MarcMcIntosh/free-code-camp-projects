import React from 'react';
import { func } from 'prop-types';

/* On Button Click this should alow the user to create a new cake */
const Header = ({ onClick }, { classnames }) => (
  <header className={classnames('recipe-box-header')}>
    <div className={classnames('recipe-box-header__row')}>
      <section className={classnames('recipe-box-header__start')}>
        <span className={classnames('recipe-box-header__title')}>Recipe Box</span>
      </section>

      <section className={classnames('recipe-box-header__end')}>
        <button
          className={classnames('recipe-box-header__button')}
          tabIndex="0"
          title="Add Cake"
          value
          onClick={onClick}
        >playlist_add</button>
      </section>
    </div>
  </header>
);

Header.propTypes = { onClick: func.isRequired };
Header.contextTypes = { classnames: func.isRequired };

export default Header;
