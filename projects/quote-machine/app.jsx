import React from 'react';
import ReactDOM from 'react-dom';
import Container, { TweetButton, NextButton, Display } from './index';

require('./src/styles/main.scss');

const App = () => (
  <Container>
    <Display />
    <TweetButton />
    <NextButton />
  </Container>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
