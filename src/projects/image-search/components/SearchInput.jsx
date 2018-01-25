import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func } from 'prop-types';

const SearchInput = ({ input, meta: { active, submitting }, submit }, { classnames }) => (<div className={classnames('search', { 'search--upgraded': input.value || active, 'search--focused': active })}>

  <input className={classnames('search__input')} {...input} />

  <label htmlFor={input.name} className={classnames('search__label', (input.value || active) && 'search__label--float-above')}>Image Search</label>

  <a className={classnames('search__icon')} onClick={submit} role="button" type="submit" title="Search Wikipedia" tabIndex="0" disabled={submitting || !input.value}>search</a>

  <div className={classnames('search__line', active && 'search__line--active')} />
</div>);

SearchInput.propTypes = { ...fieldPropTypes, submit: func.isRequired };

SearchInput.contextTypes = { classnames: func.isRequired };

export default SearchInput;
