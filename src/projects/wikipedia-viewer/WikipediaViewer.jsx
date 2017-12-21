import React, { PureComponent } from 'react';
import { object, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { onSubmit, onChange, onFocus, onBlur } from './actions';
// import ListItem from './components/ListItem';
// import SearchBar from './components/SearchBar';
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
    const { results, error, submitting, active, value } = this.props;
    const { classnames } = this.context;
    return (<div className={classnames('wikipedia-viewer')}>

      <form className={classnames('wikipedia-viewer__header')} noValidate onSubmit={this._handleSubmit}>
        <div className={classnames('wikipedia-viewer__search', active && 'wikipedia-viewer__search--focused', (active || value) && 'wikipedia-viewer__search--upgraded', error && 'wikipedia-viewer__search--invalid')}>
          <input onChange={this.props.onChange} value={value} tabIndex="0" onFocus={this.props.onFocus} onBlur={this.props.onBlur} type="search" name="gsrsearch" className={classnames('wikipedia-viewer__input')} />

          <label htmlFor="grsearch" className={classnames('wikipedia-viewer__label', (value || active) && 'wikipedia-viewer__label--float-above')}>Search Wikipedia For</label>

          <a className={classnames('wikipedia-viewer__icon')} role="button" type="submit" title="Search Wikipedia" tabIndex="0" disabled={submitting || !value} onClick={this._handleSubmit}>search</a>

          <div className={classnames('wikipedia-viewer__line', active && 'wikipedia-viewer__line--active')} />

        </div>

        <p className={classnames('wikipedia-viewer__helptext', error && 'wikipedia-viewer__helptext--validation-msg')}>{error}</p>

      </form>

      <section className={classnames('wikipedia-viewer__random')}>
        <a title="random wiki" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">Open a Random Wiki</a>
      </section>

      <ul className={classnames('wikipedia-viewer__results')}>
        {Object.entries(results).map(([key, { pageid, title, extract }]) => (<Result key={key} pageid={pageid} title={title} extract={extract} />))}
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
  results: object.isRequired,
};

WikipediaViewer.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(WikipediaViewer);
