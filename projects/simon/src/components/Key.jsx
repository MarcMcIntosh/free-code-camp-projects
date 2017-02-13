import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
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
    const { color, frequency, tone, turn, playing, className } = this.props;
    return (<Button
      className={(
        (frequency === tone && !turn)
        || this.state.keyHeld
      ) ? `${className} ${color}--active` : `${className} ${color}`
      }
      disabled={playing && !turn}
      onMouseDown={this.play}
      onMouseUp={this.stop}
      onMouseOut={this.stop}
    />);
  }
}
const { SIN, SQU, SAW, TRI } = Constants.WAVES;

Key.propTypes = {
  className: PropTypes.string,
  frequency: PropTypes.number.isRequired,
  audio: PropTypes.instanceOf(window.AudioContext),
  aux: PropTypes.instanceOf(window.GainNode),
  wave: PropTypes.oneOf([SIN, SQU, SAW, TRI]),
  bpm: PropTypes.number,
  tone: PropTypes.number,
  turn: PropTypes.bool,
  playing: PropTypes.bool,
  color: PropTypes.string,
  playerInput: PropTypes.func,
  ctKey: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Key);
