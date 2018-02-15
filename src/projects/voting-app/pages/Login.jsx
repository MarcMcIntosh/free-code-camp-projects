import React from 'react';
import { bool, string } from 'prop-types';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/Forms/Register';

const RegisterPage = ({ isAuthorised, redirect, ...props }) => (!isAuthorised ? (<LoginForm {...props} />) : (<Redirect to={redirect} />));

RegisterPage.propTypes = {
  redirect: string.isRequired,
  isAuthorised: bool.isRequired,
};

export default RegisterPage;
