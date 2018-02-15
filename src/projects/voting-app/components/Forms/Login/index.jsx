import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
import renderField from '../renderField';
import validate from './validate';

const LoginForm = ({ handleSubmit, submitting }, { classnames }) => (<form onSubmit={handleSubmit} className={classnames('card')}>
  <Field name="username" label="User" type="text" component={renderField} />
  <Field name="password" label="Password" type="password" component={renderField} />
  <div>
    <button type="submit" disabled={submitting}>Login</button>
  </div>
</form>);

LoginForm.propTypes = propTypes;
LoginForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'voting-app-login-form',
  validate,
})(LoginForm);
