import React, { PureComponent } from 'react';
import { func, object } from 'prop-types';


class Poll extends PureComponent {
  render() {
    return (<div className={this.context.classnames('poll')}>View Poll {this.props.match.params.question}</div>);
  }
}

Poll.propTypes = {
  // getPoll: func.isRequired,
  match: object.isRequired,
};

Poll.contextTypes = { classnames: func.isRequired };

export default Poll;
