import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func } from 'prop-types';

const TextField = ({
  input,
  type,
  label,
  meta: { active, touched, error },
  ...props
}, {
  classnames,
}) => (<div {...props}>
  <div className={classnames({ 'recipe-box-form__field': true, 'recipe-box-form__field--focused': active, 'recipe-box-form__field--invalid': (touched && error) })}>

    <input {...input} type={type} className={classnames('recipe-box-form__input')} />

    <label htmlFor={input.name} className={classnames('recipe-box-form__label', { 'recipe-box-form__label--float-above': input.value || active })} >{label}</label>

    <div className={classnames('recipe-box-form__line', { 'recipe-box-form__line--active': active })} />

  </div>

  <p className={classnames('recipe-box-form__helptext', 'recipe-box-form__helptext--validation-msg')}>{error}</p>
</div>);

TextField.propTypes = { ...fieldPropTypes };
TextField.defaultProps = { type: 'text' };
TextField.contextTypes = { classnames: func.isRequired };

export default TextField;
