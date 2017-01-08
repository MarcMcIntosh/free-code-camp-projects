import React from 'react';
import ReactDOM from 'react-dom';
import Container, { RandomWiki } from './index';

require('./src/styles/main.scss');

const App = () => (
  <Container>
    <RandomWiki />
  </Container>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
