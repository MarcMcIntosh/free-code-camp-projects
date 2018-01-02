import React, { PureComponent } from 'react';
import { array, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { onSubmit, onChange, onFocus, onBlur } from './actions';
import SearchBar from './components/SearchBar';
import Result from './components/Result';


const mapStateToProps = ({ wikipediaViewer: { submitting, results, error, active, value } }) => ({ submitting, results, error, active, value });

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(onChange(event.target.value)),
  onFocus: () => dispatch(onFocus()),
  onBlur: () => dispatch(onBlur()),
  onSubmit: value => dispatch(onSubmit(value)),
});


class WikipediaViewer extends PureComponent {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.value);
    return void 0;
  }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('wikipedia-viewer')}>
      <SearchBar className={classnames('wikipedia-viewer__header')} noValidate onSubmit={this._handleSubmit} onChange={this.props.onChange} onBlur={this.props.onBlur} onFocus={this.props.onFocus} error={this.props.error} submitting={this.props.submitting} active={this.props.active} value={this.props.value} />

      <section className={classnames('wikipedia-viewer__random')}>
        <a title="random wiki" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">Open a Random Wiki</a>
      </section>

      <ul className={classnames('wikipedia-viewer__results')}>
        {this.props.results.map(({ pageid, title, extract }) => (<Result key={pageid} pageid={pageid} title={title} extract={extract} />))}
      </ul>
    </div>);
  }
}

WikipediaViewer.propTypes = {
  onSubmit: func.isRequired,
  onFocus: func.isRequired,
  onBlur: func.isRequired,
  onChange: func.isRequired,
  value: string.isRequired,
  submitting: bool.isRequired,
  active: bool.isRequired,
  error: string.isRequired,
  results: array.isRequired,
};

WikipediaViewer.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(WikipediaViewer);
