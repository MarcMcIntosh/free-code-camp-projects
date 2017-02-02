import React from 'react';
import Container, {
  Display,
  Icon,
  TempControl,
  Details,
  task,
} from '../../lib/local-weather';
import './LocalWeather.scss';

const LocalWeather = () => (<Container className="mdc-card local-weather">
  <Icon className="local-weather__icon" />

  <section className="mdc-card__primary">
    <Display className="mdc-card__title--large" />
    <Details className="mdc-card__subtitle" />
  </section>

  <section className="mdc-card__actions local-weather__buttons">
    <TempControl className="mdc-button mdc-button--raised mdc-button--primary" />
  </section>

</Container>);

export default LocalWeather;
export { task };
