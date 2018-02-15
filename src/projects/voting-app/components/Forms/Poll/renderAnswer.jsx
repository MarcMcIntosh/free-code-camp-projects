import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func, string } from 'prop-types';

const renderAnswer = ({
  input,
  onClick,
  type,
  label,
  meta: { active },
}, {
  classnames,
}) => (<div className={classnames('form__input', { 'form__input--focused': active })} >

  <input {...input} type={type} className={classnames('form__input')} />

  <label htmlFor={input.name} className={classnames('form__label', { 'form__label--float-above': input.value || active })}>{label}</label>

  <i className={classnames('form__icon')} tabIndex="0" role="button" title="Remove answer" onClick={onClick} >close</i>

  <div className={classnames('form__line', { 'form__line--active': active })} />
</div>);

renderAnswer.propTypes = {
  ...fieldPropTypes,
  type: string.isRequired,
  onClick: func.isRequired,
};
renderAnswer.contextTypes = { classnames: func.isRequired };

export default renderAnswer;
