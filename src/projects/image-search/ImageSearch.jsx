import React, { PureComponent } from 'react';
import { func, bool, array, string, number } from 'prop-types';
import { connect } from 'react-redux';
import classnames from './styles';
import { searchFor, setTerm, setOffset, latest } from './actions';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import SearchInformation from './components/SearchInformation';
import Latest from './components/Latest';

const mapStateToProps = ({ imageSearch: { error, fetching, term, offset, items, recent, formattedTotalResults, totalResults } }) => ({ error, fetching, term, offset, items, formattedTotalResults, totalResults, recent });

const mapDispatchToProps = dispatch => ({
  onSearch: payload => dispatch(searchFor(payload)),
  onSetTerm: payload => dispatch(setTerm(payload)),
  onSetOffset: payload => dispatch(setOffset(payload)),
  onGetLatest: payload => dispatch(latest(payload)),
});

class ImageSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.getLatest = this.getLatest.bind(this);
  }
  getChildContext() { return { classnames: this.classnames }; }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }
  componentDidUpdate(prevProps) {
    const { term, offset, searchUrl } = this.props;
    const shouldQuery = (prevProps.term !== term || prevProps.offset !== offset);

    if (term && shouldQuery) {
      const querystring = `/${term}?offset=${offset}`;
      const addr = searchUrl.replace(/\/?$/, querystring);
      this.props.onSearch(addr);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
  onScroll() {
    const { items, onSetOffset, offset, totalResults, fetching, error } = this.props;
    const w = window.innerHeight + window.scrollY;
    const n = Math.min(10, totalResults - offset);
    const d = document.body.offsetHeight - 500;
    if (w >= d && items.length && offset < totalResults && n && !fetching && !error) {
      onSetOffset(offset + n);
    }
  }
  getLatest(event) {
    event.preventDefault();
    this.props.onGetLatest(this.props.latestUrl);
  }
  handleSubmit(values) {
    /* could have more params */
    this.props.onSetTerm(values.q || '');
  }
  render() {
    return (<div className={this.classnames('image-search')}>
      <SearchBar onSubmit={this.handleSubmit} />
      <Latest onClick={this.getLatest} recent={this.props.recent} />
      {this.props.formattedTotalResults && (<SearchInformation formattedTotalResults={this.props.formattedTotalResults} />)}
      <Results items={this.props.items} />
    </div>);
  }
}

ImageSearch.propTypes = {
  onSearch: func.isRequired,
  onSetTerm: func.isRequired,
  onSetOffset: func.isRequired,
  onGetLatest: func.isRequired,
  term: string.isRequired,
  offset: number.isRequired,
  items: array.isRequired,
  recent: array.isRequired,
  totalResults: number.isRequired,
  formattedTotalResults: string.isRequired,
  error: string.isRequired,
  fetching: bool.isRequired,
  latestUrl: string,
  searchUrl: string,
};

ImageSearch.defaultProps = {
  latestUrl: '/api/image-search/latest',
  searchUrl: '/api/image-search/search',
};

ImageSearch.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(ImageSearch);
