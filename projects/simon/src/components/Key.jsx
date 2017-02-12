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
  }
  componentWillReceiveProps() {
    if (this.oscillator !== null && !this.props.turn) {
      this.oscillator.stop(60 / (this.props.bpm * 2));
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
    const { color, frequency, tone, turn, playing } = this.props;
    const { KEY, KEY_ACTIVE } = this.props.config;
    return (<Button
      className={KEY_ACTIVE(KEY, color, (frequency === tone && turn))}
      disabled={playing && !turn}
      onMouseDown={this.play}
      onMouseUp={this.stop}
      onMouseOut={this.stop}
    />);
  }
}
const { SIN, SQU, SAW, TRI } = Constants.WAVES;

Key.propTypes = {
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
  config: PropTypes.shape({
    KEY: PropTypes.string,
    KEY_ACTIVE: PropTypes.func,
  }),
};
const { KEY, KEY_ACTIVE } = Constants.CLASSNAMES;
Key.defaultProps = { config: { KEY, KEY_ACTIVE } };

export default connect(mapStateToProps, mapDispatchToProps)(Key);
