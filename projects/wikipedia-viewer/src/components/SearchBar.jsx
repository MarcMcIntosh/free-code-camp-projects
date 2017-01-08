import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeTerm, searchWikipedia } from '../actions';

const SearchBar = (props) => {
  const { term, handleChange, handleSubmit, ...args } = props;
  return (<form
    onSubmit={(event) => {
      event.preventDefault();
      return handleSubmit(term);
    }} {...args}
  >
    <label htmlFor="SearchBar">Search</label>

    <input
      name="SearchBar"
      type="text"
      tabIndex="0"
      value={term}
      onChange={(event) => {
        event.preventDefault();
        return handleChange(event.target.value);
      }}
    />

    <input tabIndex="0" type="submit" value="Submit" />

  </form>);
};

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  term: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
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
