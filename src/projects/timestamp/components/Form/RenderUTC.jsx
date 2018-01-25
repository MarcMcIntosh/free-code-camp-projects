import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func } from 'prop-types';

const SearchInput = ({ input, meta: { active } }, { classnames }) => (<div className={classnames('form')}>

  <label htmlFor={input.name}>Milliseconds since Unix Epoch</label>
  <input className={classnames('form__input')} {...input} />

  <div className={classnames('form__line', active && 'form__line--active')} />
</div>);

SearchInput.propTypes = fieldPropTypes;

SearchInput.contextTypes = { classnames: func.isRequired };

export default SearchInput;
