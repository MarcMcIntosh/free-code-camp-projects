import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onResetGame } from '../actions';
import Button from './Button';

const mapStateToProps = state => ({
  disabled: !state.inGame,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onResetGame()),
});

const ResetButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

ResetButton.propTypes = { children: PropTypes.node };

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
