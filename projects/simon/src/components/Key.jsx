import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Constants from '../Constants';

const mapStateToProps = state => ({
  tone: state.tone,
  turn: state.turn,
});


class Key extends Component {
  constructor(props) {
    super(props);
    this.oscillator = null;
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }
  play() {
    this.oscillator = this.props.audio.createOscillator();
    this.oscillator.type = this.props.wave;
    this.oscillator.frequency.value = this.props.frequency;
    this.oscillator.connect(this.props.aux);
    this.oscillator.start(this.props.audio.currentTime);
  }
  stop() {
    if (!this.oscillator) return;
    this.oscillator.stop(this.props.audio.currentTime);
    this.oscillator.disconnect(this.props.aux);
    this.oscillator = null;
  }

  render() {
    const { tone, frequency, className, turn } = this.props;
    const cn = (tone === frequency) ? `${className}--active` : className;
    return (<Button
      className={cn}
      disabled={!turn}
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
  tone: PropTypes.number,
  className: PropTypes.string,
  turn: PropTypes.bool,
};

export default connect(mapStateToProps, null)(Key);
