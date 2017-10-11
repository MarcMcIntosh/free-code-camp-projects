import React from 'react';
import Display from './components/Display';
import Icon from './components/Icon';
import TempControl from './components/TempControl';
import Details from './components/Details';


const LocalWeather = () => (<div className="mdc-card local-weather">
  <Icon className="local-weather__icon" />

  <section className="mdc-card__primary">
    <Display className="mdc-card__title--large" />
    <Details className="mdc-card__subtitle" />
  </section>

  <section className="mdc-card__actions local-weather__buttons">
    <TempControl className="mdc-button mdc-button--raised mdc-button--primary" />
  </section>

</div>);

export default LocalWeather;
