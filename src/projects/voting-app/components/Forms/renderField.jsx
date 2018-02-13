import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func } from 'prop-types';

const renderField = ({
  input,
  label,
  type,
  meta: { active, error },
}, {
  classnames,
}) => (<div>
  <div className={classnames('field', { 'field--upgraded': input.value || active, 'field--focused': active, 'field--invalid': error })}>
    <input {...input} type={type} className={classnames('field__input')} spellCheck={false} />

    <label htmlFor={input.name} className={classnames('field__label', { 'field__label--float-above': input.value || active })} >{label}</label>

    <div className={classnames('field__line', { 'field__line--active': active })} />

  </div>

  {error && (<span className={classnames('field__helptext', 'field__helptext--validation-msg')}>{error}</span>)}
</div>);

renderField.propTypes = fieldPropTypes;
renderField.contextTypes = { classnames: func.isRequired };

export default renderField;
