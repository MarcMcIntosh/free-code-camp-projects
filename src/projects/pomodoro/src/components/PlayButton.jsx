import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { onStart } from '../actions';

const mapStateToProps = state => ({
  disabled: state.running && !state.paused,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onStart()),
});

const PlayButton = ({ children, ...props }) => (<Button {...props}>{children}</Button>);

PlayButton.propTypes = { children: PropTypes.node };
PlayButton.defaultProps = { children: 'play' };

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);
