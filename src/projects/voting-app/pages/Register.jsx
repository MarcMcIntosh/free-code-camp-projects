import React from 'react';
import { bool, string, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../../common/actions/session';
import RegisterForm from '../components/Forms/Register';

const mapStateToProps = ({ session: { authenticated } }) => ({ authenticated });

const mapDispatchToProps = dispatch => ({ onSubmit: values => dispatch(register(values)) });

const RegisterPage = ({ authenticated, ...props }, { links: { home } }) => (authenticated ? (<Redirect to={home} />) : (<RegisterForm {...props} />));

RegisterPage.propTypes = { authenticated: bool.isRequired };
RegisterPage.contextTypes = { links: shape({ home: string.isRequired }) };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
