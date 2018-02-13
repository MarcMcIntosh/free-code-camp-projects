import React from 'react';
import { bool, string } from 'prop-types';
import { Redirect } from 'react-router-dom';
import RegisterForm from '../components/Forms/Register';

const RegisterPage = ({ isAuthorised, redirect, ...props }) => (!isAuthorised ? (<RegisterForm {...props} />) : (<Redirect to={redirect} />));

RegisterPage.propTypes = {
  redirect: string.isRequired,
  isAuthorised: bool.isRequired,
};

export default RegisterPage;
