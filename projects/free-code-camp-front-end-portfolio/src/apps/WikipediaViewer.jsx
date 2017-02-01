import React from 'react';
import Container, {
  RandomWiki,
  List,
  ListItem,
  SearchBar,
  task,
} from '../../lib/wikipedia-viewer';
import './WikipediaViewer.scss';

const WikipediaViewer = () => (
  <Container>
    <SearchBar />
    <RandomWiki />
    <List>
      <ListItem />
    </List>
  </Container>
);

export default WikipediaViewer;
export { task };
