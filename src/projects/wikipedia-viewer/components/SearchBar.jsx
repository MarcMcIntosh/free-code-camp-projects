import React from 'react';
import { func, bool, string } from 'prop-types';

const SearchBar = ({ onSubmit, onFocus, onBlur, onChange, active, value, error, submitting }, { classnames }) => (<form className={classnames('wikipedia-viewer__header')} noValidate onSubmit={onSubmit}>
  <div className={classnames('wikipedia-viewer__search', active && 'wikipedia-viewer__search--focused', (active || value) && 'wikipedia-viewer__search--upgraded', error && 'wikipedia-viewer__search--invalid')}>

    <input onChange={onChange} value={value} tabIndex="0" onFocus={onFocus} onBlur={onBlur} type="search" name="gsrsearch" className={classnames('wikipedia-viewer__input')} />

    <label htmlFor="grsearch" className={classnames('wikipedia-viewer__label', (value || active) && 'wikipedia-viewer__label--float-above')}>Search Wikipedia For</label>

    <a className={classnames('wikipedia-viewer__icon')} role="button" type="submit" title="Search Wikipedia" tabIndex="0" disabled={submitting || !value} onClick={this._handleSubmit}>search</a>

    <div className={classnames('wikipedia-viewer__line', active && 'wikipedia-viewer__line--active')} />

  </div>

  <p className={classnames('wikipedia-viewer__helptext', error && 'wikipedia-viewer__helptext--validation-msg')}>{error}</p>
</form>);

SearchBar.propTypes = {
  onSubmit: func.isRequired,
  onFocus: func.isRequired,
  onBlur: func.isRequired,
  onChange: func.isRequired,
  value: string.isRequired,
  submitting: bool.isRequired,
  active: bool.isRequired,
  error: string.isRequired,
};

SearchBar.contextTypes = { classnames: func.isRequired };

export default SearchBar;
