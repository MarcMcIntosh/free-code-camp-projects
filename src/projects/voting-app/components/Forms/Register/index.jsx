import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
import renderField from '../renderField';
import validate from './validate';

const Register = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
}, {
  classnames,
}) => (<form className={classnames('card')} onSubmit={handleSubmit}>

  <section className={classnames('card__primary')}>

    <h1 classNames={classnames('card__title')}>Register account</h1>

    <Field name="username" label="User name" type="text" component={renderField} />

    <Field name="email" label="Email address" type="email" component={renderField} />

    <Field name="password" label="Password" type="password" component={renderField} />

  </section>

  <section classNames={classnames('card__actions')}>

    <button type="submit" disabled={submitting} classNames={classnames('card__action', 'card__action--primary')}>Sign Up</button>

    <button type="button" disabled={pristine || submitting} onClick={reset} classNames={classnames('card__action', 'card__action--accent')}>Reset</button>

  </section>

</form>);

Register.propTypes = propTypes;
Register.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'register-voting-app',
  validate,
})(Register);
