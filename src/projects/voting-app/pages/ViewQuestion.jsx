import React, { PureComponent } from 'react';
import { func, object } from 'prop-types';

class Poll extends PureComponent {
  componentDidMount() {
    const { match } = this.props;
    if (match.params && Object.prototype.hasOwnProperty.call(match.params, 'question')) {
      this.props.getPoll(match.params.poll);
    }
  }
  render() {
    return (<div className={this.context.classnames('poll')}>View Poll </div>);
  }
}

Poll.propTypes = {
  getPoll: func.isRequired,
  match: object.isRequired,
};

export default Poll;
