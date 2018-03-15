import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func } from 'prop-types';

const renderAnswer = ({
  input,
  label,
  meta: { active, touched, error },
}, {
  classnames,
}) => (<div>
  <div className={classnames('field', { 'field--upgraded': input.value || active, 'field--focused': active, 'field--invalid': touched && error })}>

    <input {...input} type="text" className={classnames('field__input')} />

    <label htmlFor={input.name} className={classnames('field__label', { 'field__label--float-above': input.value || active })}>{label}</label>

    <div className={classnames('field__line', { 'field__line--active': active })} />

  </div>

  {touched && error && (<span className={classnames('field__helptext', 'field__helptext--validation-msg')}>{error}</span>)}

</div>);

renderAnswer.propTypes = fieldPropTypes;

renderAnswer.contextTypes = { classnames: func.isRequired };

export default renderAnswer;
