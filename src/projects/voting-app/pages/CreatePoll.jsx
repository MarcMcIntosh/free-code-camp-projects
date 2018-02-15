import React from 'react';
import { bool, string } from 'prop-types';
import { Redirect } from 'react-router-dom';
import PollForm from '../components/Forms/Poll';

const CreatePoll = ({ isAuthorised, redirect, ...props }) => (isAuthorised ? (<PollForm {...props} />) : (<Redirect to={redirect} />));

CreatePoll.propTypes = {
  redirect: string.isRequired,
  isAuthorised: bool.isRequired,
};

export default CreatePoll;
