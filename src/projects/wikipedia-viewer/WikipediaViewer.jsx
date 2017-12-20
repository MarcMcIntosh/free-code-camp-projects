import React from 'react';
import { object, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { onSubmit, onChange, onFocus, onBlur } from './actions';
import ListItem from './components/ListItem';
import SearchBar from './components/SearchBar';


const mapStateToProps = ({ wikipediaViewer: { submitting, results, error, active, value } }) => ({ submitting, results, error, active, value });

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: payload => dispatch(onChange(payload)),
  onFocus: () => dispatch(onFocus()),
  onBlur: () => dispatch(onBlur()),
  onSubmit: () => dispatch(onSubmit(ownProps.value)),
});


const WikipediaViewer = ({ results, submitting, ...props }, { classnames }) => (<div className={classnames('wikipedia-viewer')}>

  <SearchBar value={props.value} submitting={props.submitting} active={props.active} error={props.error} onSubmit={props.onSubmit} onFocus={props.onFocus} onBlur={props.onBlur} onChange={props.onChange} />

  <a title="random wiki" className="mdc-typography--subheading1" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">random page</a>

  <div className={classnames({ 'wikipedia-viewer__results': true, 'wikipedia-viewer__results--fetching': submitting })} >{Object.entries(results).map(([key, values]) => (<ListItem key={key} {...values} />))}</div>

</div>);

WikipediaViewer.propTypes = {
  onSubmit: func.isRequired,
  onFocus: func.isRequired,
  onBlur: func.isRequired,
  onChange: func.isRequired,
  value: string.isRequired,
  submitting: bool.isRequired,
  active: bool.isRequired,
  error: string.isRequired,
  results: object.isRequired,
};

WikipediaViewer.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(WikipediaViewer);
