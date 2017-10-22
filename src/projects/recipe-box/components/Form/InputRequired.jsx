import React from 'react';

const InputRequired = (field, {
  classnames,
}) => {
  const { input, type, label, meta: { touched, error } } = field;
  const cn = classnames('recipe-box-form-textfield', {
    'recipe-box-form-textfield--upgraded': touched,
    'recipe-box-form-textfield--invalid': error,
  });
  const lbl = classnames('recipe-box-form-textfield__label', {
    'recipe-box-form-textfield__label--float-above': touched,
    'recipe-box-form-textfield__label--shake': error,
  });
  return (<div className={cn}>
    <input type={type} required className={classnames('recipe-box-form-textfield__input')} {...input} />
    <label htmlFor={input.name} className={lbl}>{label}</label>
    <div className={classnames('recipe-box-form-textfield__bottom-line')} />
    <p className={classnames('recipe-box-form-textfield-helptext')} alert={error}>{error || 'required'}</p>
  </div>);
};

export default InputRequired;
