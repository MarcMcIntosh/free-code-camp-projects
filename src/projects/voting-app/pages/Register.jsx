import React from 'react';
import fetch from 'isomorphic-fetch';
import RegisterForm from '../components/Forms/Register';

const RegisterPage = () => (<RegisterForm onSubmit={console.log} />)
