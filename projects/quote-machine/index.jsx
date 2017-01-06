import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './src/reducer';
import TweetButton from './src/components/TweetButton';
import NextButton from './src/components/NextButton';

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducer, enhancer);
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
export { TweetButton, NextButton };
