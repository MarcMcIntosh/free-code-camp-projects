import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func } from 'prop-types';

const renderField = ({
  input,
  label,
  type,
  meta: { active, error, touched },
}, {
  classnames,
}) => (<div>
  <div className={classnames('field', { 'field--upgraded': input.value || active, 'field--focused': active, 'field--invalid': touched && error })}>
    <input {...input} type={type} className={classnames('field__input')} spellCheck={false} />

    <label htmlFor={input.name} className={classnames('field__label', { 'field__label--float-above': input.value || active })} >{label}</label>

    <div className={classnames('field__line', { 'field__line--active': active })} />

  </div>

  <span className={classnames('field__helptext', touched && error && 'field__helptext--validation-msg')}>{touched && error}</span>
</div>);

renderField.propTypes = fieldPropTypes;
renderField.contextTypes = { classnames: func.isRequired };

export default renderField;
