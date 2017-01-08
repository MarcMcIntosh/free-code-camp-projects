import React from 'react';
import ReactDOM from 'react-dom';
import Container, { RandomWiki, List, ListItem } from './index';

require('./src/styles/main.scss');

const App = () => (
  <Container>
    <RandomWiki />
    <List>
      <ListItem />
    </List>
  </Container>
);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
