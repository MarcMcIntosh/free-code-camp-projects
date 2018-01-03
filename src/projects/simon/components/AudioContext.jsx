import React, { Component } from 'react';
import { node, any, number } from 'prop-types';

class AudioContext extends Component {
  constructor(props) {
    super(props);
    this.audioContext = {};
    this.gainNode = {};
  }
  getChildContext() {
    return {
      audioContext: this.audioContext,
      gainNode: this.gainNode,
    };
  }
  componentDidMount() {
    const Context = (window.AudioContext || window.webkitAudioContext);
    if (Context) {
      this.audioContext = new Context();
      this.gainNode = this.audioContext.createGain();
      this.compressor = this.audioContext.createDynamicsCompressor();

      this.compressor.threshold.value = -100 + (this.props.gain * 100);
      this.compressor.knee.value = 10;
      this.compressor.ratio.value = 10;
      this.compressor.attack.value = 0.5;
      this.compressor.release.value = 0.5;

      // this.compressor.threshold.value = -10;
      // this.compressor.attack.value = 0.5;
      this.gainNode.gain.setValueAtTime(this.props.gain, this.audioContext.currentTime);
      // this.gainNode.gain.value = this.props.gain;
      this.gainNode.connect(this.compressor);
      this.compressor.connect(this.audioContext.destination);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.gain !== prevProps.gain) {
      this.compressor.threshold.value = -100 + (this.props.gain * 100);
      this.gainNode.gain.setValueAtTime(this.props.gain, this.audioContext.currentTime);
    }
  }
  componentWillUnmount() {
    if (this.audioContext) {
      this.compressor.disconnect(this.audioContext.destination);
      this.gainNode.disconnect();
      this.audioContext.close();
    }
  }
  render() {
    const { children, gain, ...props } = this.props;
    return (<div {...props}>{children}</div>);
  }
}

AudioContext.propTypes = {
  children: node.isRequired,
  gain: number.isRequired,
};

AudioContext.childContextTypes = {
  audioContext: any.isRequired,
  gainNode: any.isRequired,
};

export default AudioContext;
