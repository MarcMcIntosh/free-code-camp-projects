import React from 'react';
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm, propTypes } from 'redux-form';
import renderField from '../renderField';
import validate from './validate';

const LoginForm = ({ handleSubmit, submitting }, { classnames, links: { register } }) => (<form onSubmit={handleSubmit} className={classnames('card')}>
  <Field name="username" label="User" type="text" component={renderField} />
  <Field name="password" label="Password" type="password" component={renderField} />
  <div>
    <button type="submit" disabled={submitting}>Login</button>
    <Link to={register} title="register">sign up</Link>
  </div>
</form>);

LoginForm.propTypes = propTypes;
LoginForm.contextTypes = { classnames: func.isRequired, links: object.isRequired };

export default reduxForm({
  form: 'voting-app-login-form',
  validate,
})(LoginForm);
