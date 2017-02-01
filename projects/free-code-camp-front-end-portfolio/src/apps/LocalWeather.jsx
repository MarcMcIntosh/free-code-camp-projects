import React from 'react';
import Container, {
  Display,
  Icon,
  TempControl,
  Details,
  task,
} from '../../lib/local-weather';
import './LocalWeather.scss';

const LocalWeather = () => (
  <Container>
    <Icon />
    <Display />
    <TempControl />
    <Details />
  </Container>
);

export default LocalWeather;
export { task };
