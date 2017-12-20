import React from 'react';
import { func, bool, string } from 'prop-types';

const SearchBar = ({
  onSubmit,
  onFocus,
  onBlur,
  onChange,
  active,
  value,
  error,
  submitting,
  ...props
}, {
  classnames,
}) => (<form onSubmit={onSubmit} {...props}>
  <div className={classnames('wikipedia-viewer__search', active && 'wikipedia-viewer__search--focused', value && 'wikipedia-viewer__search--upgraded', error && 'wikipedia-viewer__search--invalid')}>

    <input onChange={onChange} value={value} tabIndex="0" onFocus={onFocus} onBlur={onBlur} type="search" name="gsrsearch" autoComplete className={classnames('wikipedia-viewer__input')} />

    <label htmlFor="grsearch" className={classnames('wikipedia-viewer__label', (value || active) && 'wikipedia-viewer__label--float-above')}>Search Wikipedia For</label>

    <button className={classnames('wikipedia-viewer__icon')} type="submit" tabIndex="0" title="Search Wikipedia" disabled={submitting || !value}>search</button>

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

export default SearchBar;
