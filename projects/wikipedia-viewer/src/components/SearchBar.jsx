import React, { PropTypes } from 'react';

const SearchBar = (props) => {
  const { term, ...args } = props;
  return (<div {...args}>{term}</div>);
};

SearchBar.propTypes = {
  term: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

/* Add an onChange function and handle submit */

export default SearchBar;
