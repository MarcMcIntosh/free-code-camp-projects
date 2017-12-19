import React from 'react';
import { object, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { searchWikipedia } from './actions';
import ListItem from './components/ListItem';
import Search from './components/Search';


const mapStateToProps = ({
  wikipediaViewer: { results, error, fetching },
}) => ({ results, fetching, error });

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(searchWikipedia(values.term)),
});


const WikipediaViewer = ({ onSubmit, results, fetching, error }, { classnames }) => (<div className={classnames('wikipedia-viewer')}>
  <Search onSubmit={onSubmit} />
  {error && (<p>{error}</p>)}
  <a title="random wiki" className="mdc-typography--subheading1" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">random page</a>


  {/* fetching && <Spinner name="pacman" /> */}

  <div className={classnames({ 'wikipedia-viewer__results': true, 'wikipedia-viewer__results--fetching': fetching })} >{Object.entries(results).map(([key, values]) => (<ListItem key={key} {...values} />))}</div>

</div>);

WikipediaViewer.propTypes = {
  onSubmit: func.isRequired,
  results: object.isRequired,
  fetching: bool.isRequired,
  error: string.isRequired,
};

WikipediaViewer.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(WikipediaViewer);
