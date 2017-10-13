import React from 'react';
import { array, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Spinner from 'react-spinkit';
import { searchWikipedia } from './actions';
import ListItem from './components/ListItem';
import Search from './components/Search';


const mapStateToProps = state => ({
  results: state.results,
  fetching: state.isFetching,
  // error: state.error,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(searchWikipedia(values.term)),
});

/* write a decent text field */
// import './WikipediaViewer.scss';


const WikipediaViewer = ({ onSubmit, results, fetching }) => (<div className="wikipedia-viewer">
  <Search onSubmit={onSubmit} />

  <a title="random wiki" className="mdc-typography--subheading1" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">random page</a>

  {fetching && <Spinner name="pacman" />}

  <div className={classnames({ 'wikipedia-viewer__results': true, 'wikipedia-viewer__results--fetching': fetching })} >{results.length > 0 && results.map(d => (<ListItem {...d} />))}</div>

</div>);

WikipediaViewer.propTypes = {
  onSubmit: func.isRequired,
  results: array.isRequired,
  fetching: bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WikipediaViewer);
