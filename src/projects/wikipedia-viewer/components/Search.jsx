import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, bool } from 'prop-types';

const SearchForm = ({ handleSubmit, pristine, submitting, reset }) => (<form onSubmit={handleSubmit} className="mdc-textfield wikipedia-viewer__search-bar">

  <label className="mdc-textfield__label" htmlFor="search">Search</label>

  <Field className="mdc-textfield__input" name="term" component="input" type="text" />

  <button className="mdc-button" tabIndex="0" title="search" type="submit" disabled={pristine || submitting}>
    <i className="material-icons mdc-button__icon">search</i>
  </button>

  <button className="mdc-button" tabIndex="0" title="reset" type="button" disabled={pristine || submitting} onClick={reset}>
    <i className="material-icons mdc-button__icon">clear</i>
  </button>

</form>);

SearchForm.propTypes = {
  handleSubmit: func.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired,
  reset: func.isRequired,
};

export default reduxForm({
  form: 'wikipediaViewerSearch',
})(SearchForm);
