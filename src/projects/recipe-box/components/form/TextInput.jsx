import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { func } from 'prop-types';

const TextInput = ({ input, type, meta: { touched, error } }, { classnames }) => (<div
  className={classnames({
    'recipe-box-form__textfield': true,
    'recipe-box-form__textfield--upgraded': touched,
    'recipe-box-form__textfield--invalid': error,
  })}
>
  <input type={type} className={classnames('recipe-box-form__input')} {...input} />
</div>);

TextInput.propTypes = { ...fieldPropTypes };
TextInput.contextTypes = { classnames: func.isRequired };

export default TextInput;
