import React from 'react';
import { bool, string, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../common/actions/session';

import LoginForm from '../components/Forms/Login';

const mapStateToProps = ({ session: { authenticated } }) => ({ authenticated });

const mapDispatchToProps = dispatch => ({ onSubmit: values => dispatch(login(values)) });

const LoginPage = ({ authenticated, ...props }, { links: { home } }) => (authenticated ? (<Redirect to={home} />) : (<LoginForm {...props} />));

LoginPage.propTypes = { authenticated: bool.isRequired };
LoginPage.contextTypes = { links: shape({ home: string.isRequired }) };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
