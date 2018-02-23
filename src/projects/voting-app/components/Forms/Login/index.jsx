import React from 'react';
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm, propTypes } from 'redux-form';
import renderField from '../renderField';
import validate from './validate';

const LoginForm = ({ handleSubmit, submitting, error }, { classnames, links: { register } }) => (<form onSubmit={handleSubmit} className={classnames('card', 'form')}>

  <section className={classnames('card__primary')}>

    <h1 className={classnames('card__title')}>Sign in</h1>

  </section>

  <Field name="username" label="User name" type="text" component={renderField} />

  <Field name="password" label="Password" type="password" component={renderField} />

  <section className={classnames('form__helptext', error && !submitting && 'form__helptext--validation-msg')}>{`Error: ${error}`}</section>

  <section className={classnames('card__actions')}>

    <button title="Submit" className={classnames('card__action', 'card__action--primary')} type="submit" disabled={submitting}>Sign in</button>

    <Link to={register} title="register" className={classnames('card__action', 'card__action--accent')}>Register</Link>

  </section>

</form>);

LoginForm.propTypes = propTypes;
LoginForm.contextTypes = { classnames: func.isRequired, links: object.isRequired };

export default reduxForm({
  form: 'voting-app-login-form',
  validate,
})(LoginForm);
