import React from 'react';
import { Provider } from 'react-redux';
import App from './src/QuoteMachine';
import store from './src/store';
import './src/styles';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (<Provider store={this.store}><App /></Provider>);
  }
}

export default QuoteMachine;
