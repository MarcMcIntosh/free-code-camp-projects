import React, { PureComponent } from 'react';

class TextArea extends PureComponent {
  componentDidMount() {

  }
  render() {
    return (<textarea {...this.props} />)
  }
}
