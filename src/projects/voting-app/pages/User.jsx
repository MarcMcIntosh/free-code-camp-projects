import React, { PureComponent } from 'react';
import {
  bool,
  func,
  string,
  shape,
  array,
  // object,
} from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { refresh } from '../actions';

const mapStateToProps = ({
  votingApp: { authenticated, username, questionsAsked },
}) => ({ authenticated, username, questionsAsked });

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(refresh()),
});

class UserPage extends PureComponent {
  componentDidMount() { this.props.fetchData(); }
  render() {
    const { links: { login }, classnames } = this.context;
    const { authenticated, username, questionsAsked } = this.props;
    return (!authenticated) ? (<Redirect to={login} />) : (<div>
      <div className={classnames('card')}>
        <header className={classnames('card__primary')}>
          <h1 className={classnames('card__title')}>{username}</h1>
        </header>
        <section className={classnames('card__actions')}>
          <button className={classnames('card__action')}>Ask Question</button>
          <button className={classnames('card__action')}>Delete Account</button>
        </section>
      </div>

      {questionsAsked.map(d => (<div key={d._id} className={classnames('card')}>
        <section className={classnames('card__primary')}>
          <h1 className={classnames('card__title')}>{d.question}</h1>
          <h2 className={classnames('card__subtitle')}>
            {new Date(d.created_by).toLocaleDateString()}
          </h2>
        </section>
      </div>))}
    </div>);
  }
}

UserPage.propTypes = {
  authenticated: bool.isRequired,
  username: string.isRequired,
  // user: object.isRequired,
  fetchData: func.isRequired,
  questionsAsked: array.isRequired,
};

UserPage.contextTypes = {
  links: shape({ login: string.isRequired }).isRequired,
  classnames: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
