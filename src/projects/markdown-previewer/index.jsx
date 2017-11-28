import React, { Component } from 'react';
import { func } from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import App from './MarkdownPreviewer';
import classnames from './styles';

class MarkdownPreviewer extends Component {
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

MarkdownPreviewer.childContextTypes = { classnames: func.isRequired };

export default MarkdownPreviewer;
