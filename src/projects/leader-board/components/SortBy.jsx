import React from 'react';
import { connect } from 'react-redux';
import { oneOf, node } from 'prop-types';
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
  value: oneOf(vals).isRequired,
  isSelected: oneOf(vals).isRequired,
  children: node.isRequired,
};

SortBy.defaultProps = { children: false };

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
