import React from 'react';
import { bool, string, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register, refresh } from '../actions';
import RegisterForm from '../components/Forms/Register';

const mapStateToProps = ({ votingApp: { authenticated } }) => ({ authenticated });

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(register(values)),
  onSubmitSuccess: () => dispatch(refresh()),
});

const RegisterPage = ({ authenticated, ...props }, { links: { user } }) => (authenticated ? (<Redirect to={user} />) : (<RegisterForm {...props} />));

RegisterPage.propTypes = { authenticated: bool.isRequired };
RegisterPage.contextTypes = { links: shape({ user: string.isRequired }) };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
