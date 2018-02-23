import React from 'react';
import { bool, string, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreatePollForm from '../components/Forms/CreatePoll';
import { createPoll, refresh } from '../actions';

const mapStateToProps = ({ votingApp: { authenticated } }) => ({ authenticated });

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(createPoll(values)),
});

const CreatePoll = ({
  authenticated,
  // history: { push },
  ...props
}, {
  links: { view, login },
}) => (authenticated ? (<CreatePollForm
  {...props}
  onSubmitSuccess={(res, dispatch, { history }) => {
    dispatch(refresh());
    return history.push(view + '/' + res.id);
  }}
/>) : (<Redirect to={login} />));

CreatePoll.propTypes = {
  authenticated: bool.isRequired,
  // history: shape({ push: func.isRequired }).isRequired,
};

CreatePoll.contextTypes = {
  links: shape({ view: string.isRequired, login: string.isRequired }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoll);
