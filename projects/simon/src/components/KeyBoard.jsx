import React, { Component } from 'react';
import Key from './Key';
// import Button from './Button';

class KeyBoard extends Component {
  constructor(props) {
    super(props);
    this.audio = new (window.AudioContext || window.webkitAudioContext)();
  }
  render() {
    return (<Key audio={this.audio} frequency={440} />);
  }
}

export default KeyBoard;
