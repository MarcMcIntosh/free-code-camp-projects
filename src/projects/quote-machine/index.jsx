import React from 'react';
import { Provider } from 'react-redux';
import TweetButton from './src/components/TweetButton';
import NextButton from './src/components/NextButton';
import Display from './src/components/Display';
import store from './src/store';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <div {...this.props}>
          <Display />
          <TweetButton />
          <NextButton />
        </div>
      </Provider>
    );
  }
}

export default QuoteMachine;
