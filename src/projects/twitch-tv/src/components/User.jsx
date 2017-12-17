import React from 'react';
import { string } from 'prop-types';

const User = ({ name, game, error, url, logo, status, message }) => (<div key={name} className="mdc-card twitch-tv__user">

  <section className="mdc-card__horizontal-block">

    <section className="mdc-card__primary">
      <h1 className="mdc-card__title mdc-card__title--large">{name}</h1>
      <h2 className="mdc-card__subtitle">{game || error || 'Off-line'}</h2>
    </section>

    <a href={url} title="View Twitch User" target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={name} role="presentation" className="mdc-card__media-item" /></a>
  </section>

  <section className="mdc-card__supporting-text">{status || message || 'unavailable'}</section>
</div>);

User.propTypes = {
  name: string.isRequired,
  game: string,
  error: string,
  url: string.isRequired,
  logo: string.isRequired,
  status: string,
  message: string,
};

User.defaultProps = {
  game: '', error: '', status: '', message: '',
};


export default User;
