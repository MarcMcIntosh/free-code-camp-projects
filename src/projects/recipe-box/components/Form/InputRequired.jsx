import React from 'react';
import { func } from 'prop-types';
import { propTypes } from 'redux-form';

const InputRequired = ({ cx, input, type, label, meta: { touched, error } }) => {
  const cn = cx('recipe-box-form-textfield', {
    'recipe-box-form-textfield--upgraded': touched,
    'recipe-box-form-textfield--invalid': error,
  });
  const lbl = cx('recipe-box-form-textfield__label', {
    'recipe-box-form-textfield__label--float-above': touched,
    'recipe-box-form-textfield__label--shake': error,
  });
  return (<div className={cn}>
    <input type={type} required className={cx('recipe-box-form-textfield__input')} {...input} />
    <label htmlFor={input.name} className={lbl}>{label}</label>
    <div className={cx('recipe-box-form-textfield__bottom-line')} />
    <p className={cx('recipe-box-form-textfield-helptext')} alert={error}>{error || 'required'}</p>
  </div>);
};

InputRequired.propTypes = {
  cx: func.isRequired,
  ...propTypes,
};

export default InputRequired;
