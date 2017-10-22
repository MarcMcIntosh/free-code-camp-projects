import React from 'react';
import { func } from 'prop-types';
import { propTypes } from 'redux-form';

const InputField = ({ cx, input, label, type, meta: { touched, error, warning } }) => {
  const cnt = cx('recipe-box-form-textfield', {
    'recipe-box-form-textfield--upgraded': touched,
    'recipe-box-form-textfield--invalid': error || warning,
  });

  const lbl = cx('recipe-box-form-textfield__label', {
    'recipe-box-form-textfield__label--float-above': touched,
    'recipe-box-form-textfield__label--shake': error || warning,
  });

  const inp = cx('recipe-box-form-textfield__input');

  const lne = cx('recipe-box-form-textfield__bottom-line');

  const hlp = cx('recipe-box-form-textfield-helptext');

  return (<div className={cnt}>
    <label className={lbl} htmlFor={input.name}>{label}</label>
    <input type={type} className={inp} {...input} />
    <div className={lne} />
    {touched && (error || warning) && (<p className={hlp} alert={error}>{error || warning}</p>)}
  </div>);
};

InputField.propTypes = {
  cx: func.isRequired,
  ...propTypes,
};

export default InputField;
