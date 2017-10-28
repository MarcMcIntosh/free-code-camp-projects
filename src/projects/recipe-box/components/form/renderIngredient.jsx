import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func, string } from 'prop-types';

const renderIngrdient = ({
  input,
  type,
  label,
  meta: { touched, error },
  onClick,
}, {
  classnames,
}) => (<div
  className={classnames({
    'recipe-box-form__textfield': true,
    'recipe-box-form__textfield--box': true,
    'recipe-box-form__textfield--with-trailing-icon': true,
    'recipe-box-form__textfield--invalid': error || false,
  })}
>
  <input {...input} type={type} placeholder={label} className={classnames('recipe-box-form__input')} />
  <i
    className={classnames('recipe-box-form__icon')}
    tabIndex="0"
    role="button"
    title="Remove ingredient"
    onClick={onClick}
  >close</i>
  <div className={classnames('recipe-box-form__line')} />
  {touched && error && <span className={classnames('recipe-box-form__help')}>{error}</span>}
</div>);

renderIngrdient.propTypes = {
  ...fieldPropTypes,
  type: string.isRequired,
  onClick: func.isRequired,
};
renderIngrdient.contextTypes = { classnames: func.isRequired };

export default renderIngrdient;
