import React from 'react';
import ReactDOM from 'react-dom';
import Container from './index';
import TweetButton from './src/components/TweetButton';

require('./src/styles/main.scss');

const App = () => (
  <Container>
    <TweetButton />
  </Container>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
