import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm, formPropTypes } from 'redux-form';
import SearchInput from './SearchInput';

const SearchBar = ({ handleSubmit, submit }, { classnames }) => (<form className={classnames('form')} autoComplete="off" onSubmit={handleSubmit}>
  <Field submit={submit} type="search" name="q" tabIndex="0" component={SearchInput} />
</form>);

SearchBar.propTypes = formPropTypes;

SearchBar.contextTypes = { classnames: func.isRequired };

export default reduxForm({ form: 'image-search' })(SearchBar);
