import React from 'react';
import { connect } from 'react-redux';
import { func, bool, node } from 'prop-types';
import { fetchQuote } from '../actions';
import Button from './Button';

const NextButton = ({
  children,
  ...props
}) => (<Button {...props} >{children}</Button>);

NextButton.propTypes = {
  onClick: func.isRequired,
  disabled: bool.isRequired,
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
