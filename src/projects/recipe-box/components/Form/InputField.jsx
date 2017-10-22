import React from 'react';

const InputField = (field, { classnames }) => {
  const { input, label, type, meta: { touched, error, warning } } = field;

  const cnt = classnames('recipe-box-form-textfield', {
    'recipe-box-form-textfield--upgraded': touched,
    'recipe-box-form-textfield--invalid': error || warning,
  });

  const lbl = classnames('recipe-box-form-textfield__label', {
    'recipe-box-form-textfield__label--float-above': touched,
    'recipe-box-form-textfield__label--shake': error || warning,
  });

  const inp = classnames('recipe-box-form-textfield__input');

  const lne = classnames('recipe-box-form-textfield__bottom-line');

  const hlp = classnames('recipe-box-form-textfield-helptext');

  return (<div className={cnt}>
    <label className={lbl} htmlFor={input.name}>{label}</label>
    <input type={type} className={inp} {...input} />
    <div className={lne} />
    {touched && (error || warning) && (<p className={hlp} alert={error}>{error || warning}</p>)}
  </div>);
};

export default InputField;
