import React from 'react';
import { connect } from 'react-redux';
import { onInput } from '../actions';

const mapStateToProps = state => ({
  value: state.input,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(onInput(event.target.value)),
});

const UserInput = props => (<textarea {...props} />);

UserInput.defaultProps = { rows: 10 };

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
