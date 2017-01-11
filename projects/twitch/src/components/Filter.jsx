import React, { PropTypes } from 'react';

const FilterButton = (props) => {
  const { display, ...rest } = props;
  return (<button {...rest}>{display}</button>);
};

FilterButton.propTypes = {
  display: PropTypes.string,
};

export default FilterButton;
