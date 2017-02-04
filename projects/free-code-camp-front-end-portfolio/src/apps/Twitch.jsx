import React from 'react';
import './Twitch.scss';
import Container, {
  UserList,
  Header,
  task,
} from '../../lib/twitch';

const Twitch = () => (<Container className="twitch-tv">
  <div className="mdc-card">
    <div className="mdc-card__horizontal-block">

      <section className="mdc-card__primary">
        <h1 className="mdc-card__title mdc-card__title--large">Twitch TV Streams</h1>
      </section>

      <Header
        className="mdc-card__actions mdc-card__actions--vertical"
        classnames={{
          button: 'mdc-button mdc-button--raised mdc-button--compact twitch-tv__button',
        }}
      />
    </div>
  </div>
  <UserList
    className="twitch-tv__users"
    classnames={{
      item: 'mdc_card',
      header: 'mdc-card__primary',
      name: 'mdc-card__title mdc-card__title--large',
      game: 'mdc-card__subtitle',
      status: 'mdc-card__supporting-text',
      image: 'mdc-card__media-item',
    }}
  />
</Container>);

export default Twitch;
export { task };
