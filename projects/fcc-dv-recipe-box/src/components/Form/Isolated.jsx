import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
// import { Form } from './Recipe';

const reducers = {
  // ... your other reducers here ...
  form: formReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer);

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    // this.handleSumbit = this.handleSumbit.bind(this);
  }
  render() {
    const { children } = this.props;
    return (
      <Provider store={this.store}>
        <div {...this.props}>{children}</div>
      </Provider>
    );
  }
}

RecipeForm.propTypes = {
  children: React.PropTypes.node,
};

RecipeForm.defaultProps = {
  children: false,
};

export default { RecipeForm };
// export { Form };
