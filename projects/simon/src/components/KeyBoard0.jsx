import React, { Component } from 'react';
// import Key from './Key';
import Button from './Button';

class KeyBoard extends Component {
  constructor(props) {
    super(props);
    this.audio = new (window.AudioContext || window.webkitAudioContext)();
    // this.oscillator = this.audio.createOscillator();
    // this.gain = this.audio.createGain();
    // this.oscillator.connect(this.audio.destination);
    // this.oscillator.connect(this.gain);
    // this.gain.connect(this.audio.destination);
    this.oscillator = null;
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }
  play(event) {
    this.oscillator = this.audio.createOscillator();
    this.oscillator.frequency.value = event.target.value;
    this.oscillator.connect(this.audio.destination);
    this.oscillator.start(this.audio.currentTime);
    /*
    Events that this will have to interact with are:
    * onKeyDown onKeyUp
    * onTouchCancel onTouchEnd onTouchMove onTouchStart
    * onMouseDown onMouseUp
    */
  }
  stop() {
    this.oscillator.stop(this.audio.currentTime);
    this.oscillator.disconnect(this.audio.destination);
    this.oscillator = null;
  }
  render() {
    return (<Button onMouseDown={this.play} onMouseUp={this.stop} value={440}>A</Button>);
  }
}

export default KeyBoard;
