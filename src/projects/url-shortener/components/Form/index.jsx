import React from 'react';
import { Field, reduxForm, formPropTypes } from 'redux-form';
import validateUrl from './validate';
import UrlInput from './UrlInput';

const UrlForm = ({ handleSubmit, submit }) => (<form onSubmit={handleSubmit} autoComplete="off">
  <Field submit={submit} type="url" validate={validateUrl} component={UrlInput} name="address" label="URL shortener" />
</form>);

UrlForm.propTypes = formPropTypes;

export default reduxForm({ form: 'url-shortener' })(UrlForm);
