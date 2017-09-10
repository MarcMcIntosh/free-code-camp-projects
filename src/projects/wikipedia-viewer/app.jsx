import React from 'react';
import ReactDOM from 'react-dom';
import Container, { RandomWiki, List, ListItem, SearchBar } from './index';

require('./src/styles/main.scss');

const App = () => (
  <Container>
    <SearchBar />
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
