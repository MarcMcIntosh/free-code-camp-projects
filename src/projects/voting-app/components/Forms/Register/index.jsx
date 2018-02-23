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
  error,
}, {
  classnames,
}) => (<form className={classnames('card', 'form')} onSubmit={handleSubmit}>

  <section className={classnames('card__primary')}>

    <h1 className={classnames('card__title')}>Register</h1>

  </section>

  <Field name="username" label="User name" type="text" component={renderField} />

  <Field name="password" label="Password" type="password" component={renderField} />

  <section className={classnames('form__helptext', error && 'form__helptext--validation-msg')}>{`Error: ${error}`}</section>

  <section className={classnames('card__actions')}>

    <button type="submit" disabled={submitting} className={classnames('card__action', 'card__action--primary')}>Submit</button>

    <button type="button" disabled={pristine || submitting} onClick={reset} className={classnames('card__action', 'card__action--accent')}>Reset</button>

  </section>

</form>);

Register.propTypes = propTypes;
Register.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'register-voting-app',
  validate,
  asyncValidate,
  // asyncChangeFields: ['username'],
  asyncBlurFields: ['username'],
})(Register);
