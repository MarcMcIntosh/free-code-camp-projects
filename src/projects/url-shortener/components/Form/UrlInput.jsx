import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func } from 'prop-types';

const Input = ({ input, type, label, meta: { active, error, submitting }, submit }, { classnames }) => (<div>
  <div className={classnames('address', {
    'address--upgraded': input.value || active,
    'address--focused': active,
    'address--invalid': input.value && error,
  })}
  >

    <input {...input} type={type} className={classnames('address__input')} />

    <label htmlFor={input.name} className={classnames('address__label', { 'address__label--float-above': input.value || active })} >{label}</label>

    <a className={classnames('address__icon')} onClick={submit} role="button" type="submit" title="submit" tabIndex="0" disabled={submitting || !input.value || error}>done</a>

    <div className={classnames('address__line', { 'address__line--active': active })} />

  </div>

  {error && (<span className={classnames('address__helptext', 'address__helptext--validation-msg')}>{error}</span>)}
</div>);

Input.propTypes = fieldPropTypes;

Input.contextTypes = { classnames: func.isRequired };

export default Input;
