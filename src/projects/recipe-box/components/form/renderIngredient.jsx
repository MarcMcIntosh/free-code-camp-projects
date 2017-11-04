import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func, string } from 'prop-types';

const renderIngrdient = ({
  input,
  onClick,
  type,
  label,
  meta: { active },
}, {
  classnames,
}) => (<div className={classnames('recipe-box-form__ingredient', { 'recipe-box-form__ingredient--focused': active })} >

  <input {...input} type={type} className={classnames('recipe-box-form__input')} />

  <label htmlFor={input.name} className={classnames('recipe-box-form__label', { 'recipe-box-form__label--float-above': input.value || active })}>{label}</label>

  <i className={classnames('recipe-box-form__icon')} tabIndex="0" role="button" title="Remove ingredient" onClick={onClick} >close</i>

  <div className={classnames('recipe-box-form__line', { 'recipe-box-form__line--active': active })} />
</div>);

renderIngrdient.propTypes = {
  ...fieldPropTypes,
  type: string.isRequired,
  onClick: func.isRequired,
};
renderIngrdient.contextTypes = { classnames: func.isRequired };

export default renderIngrdient;
