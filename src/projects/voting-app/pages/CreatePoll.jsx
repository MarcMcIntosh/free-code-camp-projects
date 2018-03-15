import React, { PureComponent } from 'react';
import { bool, string, shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreatePollForm from '../components/Forms/CreatePoll';
import { createPoll, refresh } from '../actions';

const mapStateToProps = ({ votingApp: { authenticated, fetching } }) => ({ authenticated, fetching });

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(createPoll(values)),
  onCheckAuth: () => dispatch(refresh()),
});

class CreatePoll extends PureComponent {
  componentDidMount() {
    if (!this.props.authenticated) { this.props.onCheckAuth(); }
  }
  render() {
    const { authenticated, fetching, ...props } = this.props;
    const { links: { view, login } } = this.context;
    if (!authenticated && !fetching) {
      return (<Redirect to={login} />);
    }
    return (<div>
      {!authenticated && fetching && (<div>Checking authorisation</div>)}

      <CreatePollForm
        {...props}
        onSubmitSuccess={(res, dispatch, { history }) => history.push(view + '/' + res.payload.id)}
      />
    </div>);
  }
}

CreatePoll.propTypes = {
  authenticated: bool.isRequired,
  fetching: bool.isRequired,
  onCheckAuth: func.isRequired,
  // history: shape({ push: func.isRequired }).isRequired,
};

CreatePoll.contextTypes = {
  links: shape({ view: string.isRequired, login: string.isRequired }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoll);
