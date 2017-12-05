import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, number, oneOf, bool, func, any } from 'prop-types';
import Constants from '../Constants';
import { onPlayerInput } from '../actions';

const mapStateToProps = state => ({
  tone: state.tone,
  turn: state.turn,
  bpm: state.bpm,
  playing: state.inGame,
});

const mapDispatchToProps = dispatch => ({
  playerInput: frequency => dispatch(onPlayerInput(frequency)),
});


class Key extends Component {
  constructor(props) {
    super(props);
    this.oscillator = null;
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.state = { keyHeld: false };
  }
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
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
      this.setState({ keyHeld: true }, this.play);
    }
  }
  onKeyUp(event) {
    if (event.key === this.props.ctKey) {
      this.setState({ keyHeld: false });
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
    // if (this.props.playing) this.props.playerInput(this.props.frequency);
  }
  stop() {
    if (!this.oscillator) return;
    if (this.props.playing) this.props.playerInput(this.props.frequency);
    this.oscillator.disconnect(this.props.aux);
    this.oscillator.stop(this.props.audio.currentTime);
    this.oscillator = null;
  }
  render() {
    const { frequency, tone, turn, className, disabled } = this.props;
    return (<button
      type="button"
      tabIndex="0"
      title={`${frequency} Hertz Tone`}
      className={(
        (frequency === tone && !turn)
        || this.state.keyHeld
      ) ? `${className}--active` : className
      }
      disabled={disabled}
      onMouseDown={this.play}
      onMouseUp={this.stop}
      onMouseOut={this.stop}
    />);
  }
}
const { SIN, SQU, SAW, TRI } = Constants.WAVES;

Key.propTypes = {
  className: string.isRequired,
  frequency: number.isRequired,
  // audio: instanceOf(window.AudioContext).isRequired,
  // aux: instanceOf(window.GainNode).isRequired,
  audio: any.isRequired,
  aux: any.isRequired,
  wave: oneOf([SIN, SQU, SAW, TRI]).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Key);
