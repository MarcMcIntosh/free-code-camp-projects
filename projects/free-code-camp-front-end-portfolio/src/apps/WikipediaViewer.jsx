import React, { PropTypes } from 'react';
// import SearchIcon from 'material-design-icons/actions/svg/production/ic_search_24px.svg';
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
  <Container className="wikipedia-viewer">
    <SearchBar
      className="mdc-textfield wikipedia-viewer__search-bar"
      label="Search"
      classnames={{
        input: 'mdc-textfield__input wikipedia-viewer__search-bar--input',
        label: 'mdc-textfield__label wikipedia-viewer__search-bar--label',
        button: 'wikipedia-viewer__search-bar--button material-icons',
      }}
    />
    <div><RandomWiki /></div>
    <List>
      <AltListItem />
    </List>
  </Container>
);

export default WikipediaViewer;
export { task };
