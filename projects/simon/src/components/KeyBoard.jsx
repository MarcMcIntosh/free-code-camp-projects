import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Key from './Key';
import Constants from '../Constants';
import { onAiEnd, onAiPlay } from '../actions';


const mapStateToProps = state => ({
  vol: state.volume,
  notes: state.notes,
  wave: state.wave,
  challenge: state.challenge,
  bpm: state.bpm,
  colors: state.colors,
});

const mapDispatchToProps = dispatch => ({
  onAiEnd: () => dispatch(onAiEnd()),
  onAiPlay: n => dispatch(onAiPlay(n)),
});

class KeyBoard extends Component {
  constructor(props) {
    super(props);
    this.audio = new (window.AudioContext || window.webkitAudioContext)();
    this.aux = this.audio.createGain();
    this.compressor = this.audio.createDynamicsCompressor();
    this.compressor.threshold.value = -10;
    // this.compressor.ratio.value = 0.03;
    this.compressor.attack.value = 0.5;
    this.aux.gain.value = (this.props.vol / 100);
    this.aux.connect(this.compressor);
    this.compressor.connect(this.audio.destination);
    this.aiplay = this.aiplay.bind(this);
    this.auto = this.auto.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.challenge.length < nextProps.challenge.length) {
      setTimeout(() => {
        this.auto(nextProps.challenge);
      }, 60000 / this.props.bpm);
    }
    if (this.props.vol !== nextProps.vol) {
      this.aux.gain.value = nextProps.vol / 100;
    }
  }
  componentWillUnmount() { this.audio.close(); }

  aiplay(n, t) {
    const osc = this.audio.createOscillator();
    osc.frequency.value = n;
    osc.type = this.props.wave;
    osc.connect(this.aux);
    this.props.onAiPlay(n);
    osc.start(this.audio.currentTime);
    setTimeout(() => {
      osc.stop(this.audio.currentTime);
      osc.disconnect(this.aux);
      this.setState({ tone: -1 });
    }, t);
  }
  auto(arr, index) {
    const i = index || 0;
    const t = (60 * 1000) / this.props.bpm;
    if (i < arr.length) {
      this.aiplay(arr[i], t);
      setTimeout(() => { this.auto(arr, i + 1); }, t * 2);
    } else {
      this.props.onAiEnd();
    }
  }
  render() {
    const { className, notes, wave, colors, classnames } = this.props;
    return (<div className={className}>{
      notes.map((d, i) => (<Key
        className={classnames.key}
        key={i}
        color={colors[i]}
        audio={this.audio}
        aux={this.aux}
        frequency={d}
        wave={wave}
      />))
    }</div>);
  }
}
const { SIN, SQU, SAW, TRI } = Constants.WAVES;
KeyBoard.propTypes = {
  vol: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.number),
  wave: PropTypes.oneOf([SIN, SQU, SAW, TRI]),
  colors: PropTypes.arrayOf(PropTypes.string),
  challenge: PropTypes.array,
  bpm: PropTypes.number,
  onAiEnd: PropTypes.func,
  onAiPlay: PropTypes.func,
  className: PropTypes.string,
  classnames: PropTypes.shape({ key: PropTypes.string }),
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyBoard);
