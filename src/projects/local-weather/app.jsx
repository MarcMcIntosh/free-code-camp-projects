import React from 'react';
import ReactDOM from 'react-dom';
import Container, {
  Display,
  Icon,
  TempControl,
  Details,
} from './index';

require('./src/styles/main.scss');

const App = () => (
  <Container>
    <Display />
    <Icon />
    <Details />
    <TempControl />
  </Container>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
