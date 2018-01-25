import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func } from 'prop-types';

const SearchInput = ({ input, meta: { active } }, { classnames }) => (<div className={classnames('utc', { 'utc--upgraded': input.value || active, 'utc--focused': active })}>

  <input className={classnames('utc__input')} {...input} />

  <label htmlFor={input.name} className={classnames('utc__label', (input.value || active) && 'utc__label--float-above')}>Milliseconds since Unix Epoch</label>

  <div className={classnames('utc__line', active && 'utc__line--active')} />
</div>);

SearchInput.propTypes = fieldPropTypes;

SearchInput.contextTypes = { classnames: func.isRequired };

export default SearchInput;
