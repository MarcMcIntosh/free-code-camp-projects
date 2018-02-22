import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
import renderField from '../renderField';
import validate from './validate';
import asyncValidate from './asyncValidate';

const Register = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
}, {
  classnames,
}) => (<form className={classnames('card', 'form')} onSubmit={handleSubmit}>

  <section className={classnames('card__primary')}>

    <h1 className={classnames('card__title')}>Register account</h1>

    <Field name="username" label="User name" type="text" component={renderField} />

    {/* <Field name="email" label="Email address" type="email" component={renderField} /> */}

    <Field name="password" label="Password" type="password" component={renderField} />

  </section>

  <section className={classnames('card__actions')}>

    <button type="submit" disabled={submitting} className={classnames('card__action', 'card__action--primary')}>Sign Up</button>

    <button type="button" disabled={pristine || submitting} onClick={reset} className={classnames('card__action', 'card__action--accent')}>Reset</button>

  </section>

</form>);

Register.propTypes = propTypes;
Register.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'register-voting-app',
  validate,
  asyncValidate,
  asyncChangeFields: ['username'],
})(Register);
