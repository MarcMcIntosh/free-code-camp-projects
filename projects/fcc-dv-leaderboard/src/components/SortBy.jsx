import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { SORT } from '../Constants';
import { toggleDisplay } from '../actions';
import Button from './Button';


const mapStateToProps = state => ({
  isSelected: state.display,
});

const mapDispatchToProps = dispatch => ({
  onClick: event => dispatch(toggleDisplay(event.target.value)),
});

const SortBy = ({ value, isSelected, ...props }) => (
  <Button disabled={(isSelected) === value} {...props}>{SORT[value].text}</Button>
);

const vals = SORT.map(d => d.value);
SortBy.propTypes = {
  value: PropTypes.oneOf(vals).isRequired,
  isSelected: PropTypes.oneOf(vals).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
