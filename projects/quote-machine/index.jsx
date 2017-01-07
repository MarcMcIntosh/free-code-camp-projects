import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './src/reducer';
import TweetButton from './src/components/TweetButton';
import NextButton from './src/components/NextButton';
import Display from './src/components/Display';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <div className={this.props.classed}>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

QuoteMachine.propTypes = {
  classed: React.PropTypes.string,
  children: React.PropTypes.node,
};
QuoteMachine.defaultProps = {
  classed: 'app__container',
};

export default QuoteMachine;
export { TweetButton, NextButton, Display };
