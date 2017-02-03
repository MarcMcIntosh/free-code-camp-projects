import React, { PropTypes } from 'react';
import Container, {
  RandomWiki,
  List,
  SearchBar,
  task,
} from '../../lib/wikipedia-viewer';
import './WikipediaViewer.scss';


const AltListItem = ({
  title,
  extract,
  pageid,
}) => {
  const addr = `https://en.wikipedia.org/?curid=${pageid}`;
  return (<div className="mdc-card">
    <section className="mdc-card__primary">
      <h1 className="mdc-card__title mdc-card__title--large">
        <a href={addr} target="_blank" rel="noopener noreferrer">{title}</a>
      </h1>
    </section>
    <section className="mdc-card__supporting-text">{extract}</section>
  </div>);
};

AltListItem.propTypes = {
  title: PropTypes.string,
  extract: PropTypes.string,
  pageid: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
};

const WikipediaViewer = () => (
  <Container>
    <SearchBar />
    <RandomWiki />
    <List>
      <AltListItem />
    </List>
  </Container>
);

export default WikipediaViewer;
export { task };
