import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Constants from '../Constants';
import { setSort } from '../actions';
import Button from './Button';

const mapStateToProps = state => ({
  isSelected: state.display,
});

const mapDispatchToProps = dispatch => ({
  onClick: event => dispatch(setSort(event.target.value)),
});

const SortBy = ({
  children,
  value,
  isSelected,
  ...props
}) => (
  <Button value={value} disabled={(isSelected) === value} {...props} >{children}</Button>
);

const vals = Constants.SORT.map(d => d.value);
SortBy.propTypes = {
  value: PropTypes.oneOf(vals).isRequired,
  isSelected: PropTypes.oneOf(vals).isRequired,
  children: PropTypes.node,
};

SortBy.defaultProps = { children: false };

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
