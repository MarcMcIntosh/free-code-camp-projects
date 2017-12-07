import React, { PureComponent } from 'react';
import { string, number, bool, func, any } from 'prop-types';

class Key extends PureComponent {
  constructor(props) {
    super(props);
    this.oscillator = null;
    this._mouseDown = this._mouseDown.bind(this);
    this._mouseUp = this._mouseUp.bind(this);
    this._keyUp = this._keyUp.bind(this);
    this._keyDown = this._keyDown.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown', this._keyDown);
  }
  componentWillReceiveProps() {
    if (this.oscillator !== null && !this.props.turn) {
      this.oscillator.stop(60 / (this.props.bpm * 2));
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.playing && !prevProps.playing) {
      this._play();
    } else if (!this.props.playing && prevProps.playing) {
      this._stop();
    }
  }
  componentWillUnmount() {
    if (this.oscillator) {
      this.oscillator.disconnect(this.context.gainNode);
    }
    window.removeEventListener('keydown', this._keyDown);
    window.removeEventListener('keyup', this._keyUp);
  }
  _keyDown(event) {
    if (event.defaultPrevented) { return; }
    if (event.key === this.props.ctKey) {
      window.addEventListener('keyup', this._keyUp);
      this.props.playerInput(this.props.frequency);
    }
  }
  _keyUp(event) {
    if (event.defaultPrevented) { return; }
    if (event.key === this.props.ctKey) {
      window.removeEventListener('keyup', this._keyUp);
      this.props.playerInput(-1);
    }
  }
  _play() {
    const { audioContext, gainNode } = this.context;
    if (audioContext.createOscillator) {
      this.oscillator = audioContext.createOscillator();
      this.oscillator.type = this.props.wave;
      this.oscillator.frequency.value = this.props.frequency;
      this.oscillator.connect(gainNode);
      this.oscillator.start(this.context.audioContext.currentTime);
    }
  }
  _stop() {
    if (!this.oscillator) { return; }
    const { audioContext, gainNode } = this.context;
    this.oscillator.stop(audioContext.currentTime);
    this.oscillator.disconnect(gainNode);
    this.oscillator = null;
  }
  _mouseDown() {
    this.props.playerInput(this.props.frequency);
  }
  _mouseUp() {
    this.props.playerInput(-1);
  }
  render() {
    const { frequency, wave, bpm, turn, playing, playerInput, ctKey, ...rest } = this.props;
    return (<button
      type="button"
      tabIndex="0"
      onMouseDown={this._mouseDown}
      onMouseUp={this._mouseUp}
      onMouseOut={this._mouseUp}
      {...rest}
    />);
  }
}

Key.propTypes = {
  frequency: number.isRequired,
  wave: string.isRequired,
  bpm: number.isRequired,
  turn: bool.isRequired,
  playing: bool.isRequired,
  playerInput: func.isRequired,
  ctKey: string.isRequired,
};

Key.defaultProps = { disabled: false };
Key.contextTypes = {
  audioContext: any.isRequired,
  gainNode: any.isRequired,
};

export default Key;
