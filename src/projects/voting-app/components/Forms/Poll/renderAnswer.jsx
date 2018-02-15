import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func, string } from 'prop-types';

const renderAnswer = ({
  input,
  onClick,
  type,
  label,
  meta: { active, touched, error },
}, {
  classnames,
}) => (<div>
  <div className={classnames('field__input', { 'field__input--focused': active })} >

    <input {...input} type={type} className={classnames('field__input')} />

    <label htmlFor={input.name} className={classnames('field__label', { 'field__label--float-above': input.value || active })}>{label}</label>

    <i className={classnames('field__icon')} tabIndex="0" role="button" title="Remove answer" onClick={onClick} >close</i>

    <div className={classnames('field__line', { 'field__line--active': active })} />

  </div>

  {touched && error && (<span className={classnames('field__helptext', 'field__helptext--validation-msg')}>{error}</span>)}

</div>);

renderAnswer.propTypes = {
  ...fieldPropTypes,
  type: string.isRequired,
  onClick: func.isRequired,
};
renderAnswer.contextTypes = { classnames: func.isRequired };

export default renderAnswer;
