import React from 'react';
import ReactDOM from 'react-dom';
import Container, { TweetButton, NextButton } from './index';

require('./src/styles/main.scss');

const App = () => (
  <Container>
    <TweetButton />
    <NextButton />
  </Container>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
