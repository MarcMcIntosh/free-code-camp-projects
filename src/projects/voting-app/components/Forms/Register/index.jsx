import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
import renderField from '../renderField';
import validate from './validate';

const Register = ({
  error,
  handleSubmit,
  pristine,
  reset,
  submitting,
}, {
  classnames,
}) => (<form className={classnames('card')} onSubmit={handleSubmit}>
  <Field name="username" label="User name" type="text" component={renderField} />
  <Field name="email" label="Email address" type="email" component={renderField} />
  <Field name="password" label="Password" type="password" component={renderField} />

  {error && <strong>{error}</strong>}
  <div>
    <button type="submit" disabled={submitting}>Sign Up</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
  </div>
</form>);

Register.propTypes = propTypes;
Register.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'register-voting-app',
  validate,
})(Register);
