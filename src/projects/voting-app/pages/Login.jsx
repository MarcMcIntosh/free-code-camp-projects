import React from 'react';
import { bool, string, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions';
import LoginForm from '../components/Forms/Login';

const mapStateToProps = ({ votingApp: { authenticated } }) => ({ authenticated });

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(login(values)),
});

const LoginPage = ({ authenticated, ...props }, { links: { user } }) => (authenticated ? (<Redirect to={user} />) : (<LoginForm {...props} />));

LoginPage.propTypes = { authenticated: bool.isRequired };
LoginPage.contextTypes = { links: shape({ user: string.isRequired }) };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
