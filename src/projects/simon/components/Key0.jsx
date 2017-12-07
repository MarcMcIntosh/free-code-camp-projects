import React, { PureComponent } from 'react';
import { string, number, bool, func, any } from 'prop-types';

class Key extends PureComponent {
  constructor(props) {
    super(props);
    this.oscillator = null;
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillReceiveProps() {
    if (this.oscillator !== null && !this.props.turn) {
      this.oscillator.stop(60 / (this.props.bpm * 2));
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }
  onKeyDown(event) {
    if (event.key === this.props.ctKey) {
      window.addEventListener('keyup', this.onKeyUp);
      this.play();
    }
  }
  onKeyUp(event) {
    if (event.key === this.props.ctKey) {
      window.removeEventListener('keyup', this.onKeyUp);
      this.stop();
    }
    if (this.oscillator !== null) {
      this.oscillator.stop();
      this.ocsillator = null;
    }
  }
  play() {
    if (!this.props.turn) return;
    this.oscillator = this.props.audio.createOscillator();
    this.oscillator.type = this.props.wave;
    this.oscillator.frequency.value = this.props.frequency;
    this.oscillator.connect(this.props.aux);
    this.oscillator.start(this.props.audio.currentTime);
  }
  stop() {
    if (!this.oscillator) return;
    if (this.props.playing) this.props.playerInput(this.props.frequency);
    this.oscillator.disconnect(this.props.aux);
    this.oscillator.stop(this.props.audio.currentTime);
    this.oscillator = null;
  }
  render() {
    return (<button
      type="button"
      tabIndex="0"
      onMouseDown={this.play}
      onMouseUp={this.stop}
      onMouseOut={this.stop}
      {...this.props}
    />);
  }
}

Key.propTypes = {
  frequency: number.isRequired,
  // audio: instanceOf(window.AudioContext).isRequired,
  // aux: instanceOf(window.GainNode).isRequired,
  audio: any.isRequired,
  aux: any.isRequired,
  wave: string.isRequired,
  bpm: number.isRequired,
  tone: number.isRequired,
  turn: bool.isRequired,
  playing: bool.isRequired,
  // color: string.isRequired,
  playerInput: func.isRequired,
  disabled: bool,
  ctKey: string.isRequired,
};

Key.defaultProps = { disabled: false };

export default Key;
