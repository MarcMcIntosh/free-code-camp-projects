import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions';
import Button from './Button';

const NextButton = ({
  children,
  ...props
}) => (<Button {...props} >{children}</Button>);

const { func, bool, node } = PropTypes;
NextButton.propTypes = {
  onClick: func,
  disabled: bool,
  children: node,
};

NextButton.defaultProps = { children: 'Next' };

const mapStateToProps = state => ({
  disabled: !state.done,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(fetchQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
