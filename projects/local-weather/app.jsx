import React from 'react';
import ReactDOM from 'react-dom';
import Container, { Display } from './index';

const App = () => (
  <Container>
    <Display />
  </Container>
);

require('./src/styles/main.scss');

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
