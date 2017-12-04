import React from 'react';
import { func } from 'prop-types';
import { Provider } from 'react-redux';
import App from './QuoteMachine';
import store from './store';
import classnames from './styles';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.classnames = classnames;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (<Provider store={this.store}><App /></Provider>);
  }
}

QuoteMachine.childContextTypes = { classnames: func.isRequired };

export default QuoteMachine;
