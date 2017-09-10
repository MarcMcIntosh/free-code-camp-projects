import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeTerm, searchWikipedia } from '../actions';

const SearchBar = ({
  label,
  classnames,
  term,
  handleChange,
  handleSubmit,
  children,
  ...props
}) => (
  <form
    {...props}
    onSubmit={(event) => {
      event.preventDefault(); return handleSubmit(term);
    }}
  >
    <input
      className={classnames.input}
      name="SearchBar"
      type="text"
      tabIndex="0"
      value={term}
      onChange={(event) => {
        event.preventDefault();
        return handleChange(event.target.value);
      }}
    />

    {(label && !term) ? (
      <label
        className={classnames.label} htmlFor="SearchBar"
      >{label}</label>) : null }

    <button className={classnames.button} tabIndex="0" type="submit" disabled={!(term)} value="Submit">{children || 'search'}</button>

  </form>
);

const {
  string,
  func,
  number,
  oneOfType,
  shape,
  node,
} = PropTypes;

SearchBar.propTypes = {
  label: string,
  children: node,
  handleChange: func,
  handleSubmit: func,
  term: oneOfType([string, number]),
  classnames: shape({
    input: string,
    button: string,
    label: string,
  }),
};

SearchBar.defaultProps = {
  classnames: {
    button: '',
    label: '',
    input: '',
  },
};

const mapStateToProps = state => ({
  term: state.term,
});

const mapDispatchToProps = dispatch => ({
  handleChange: term => dispatch(changeTerm(term)),
  handleSubmit: term => dispatch(searchWikipedia(term)),
});
/* Add an onChange function and handle submit */

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
