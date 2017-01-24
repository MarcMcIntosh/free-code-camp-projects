import React, { PropTypes, Component } from 'react';
import Button from './Button';

class Key extends Component {
  constructor(props) {
    super(props);
    this.oscillator = null;
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }
  play() {
    this.oscillator = this.props.audio.createOscillator();
    this.oscillator.frequency.value = this.props.frequency;
    this.oscillator.connect(this.props.audio.destination);
    this.oscillator.start(this.props.audio.currentTime);
  }
  stop() {
    this.oscillator.stop(this.props.audio.currentTime);
    this.oscillator.disconnect(this.props.audio.destination);
    this.oscillator = null;
  }
  render() {
    const { frequency, ...props } = this.props;
    delete props.audio;
    return (<Button
      {...props}
      value={frequency}
      onMouseDown={this.play}
      onMouseUp={this.stop}
    >{frequency}</Button>);
  }
}

Key.propTypes = {
  frequency: PropTypes.number.isRequired,
/* Deprecation notice for webkitAudioContext
 * audio: PropTypes.oneOfType([
 * PropTypes.instanceOf(window.AudioContext),
 * PropTypes.instanceOf(window.webkitAudioContext),
 * ]), */
  audio: PropTypes.instanceOf(window.AudioContext),
};

export default Key;
