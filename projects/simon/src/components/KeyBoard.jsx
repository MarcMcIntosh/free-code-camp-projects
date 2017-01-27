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
  inGame: state.inGame,
  turn: state.turn,
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
    this.aux.gain.value = (this.props.vol / 100);
    this.aux.connect(this.audio.destination);
    this.aiplay = this.aiplay.bind(this);
    this.auto = this.auto.bind(this);
  }
  componentDidMount() {
    if (this.props.inGame && !this.props.turn) {
      this.auto.play();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.challenge.length < nextProps.challenge.length) {
      this.auto(nextProps.challenge);
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
      return setTimeout(() => this.auto(arr, i + 1), t * 2);
    }
    return this.props.onAiEnd();
  }
  render() {
    const { notes, wave, colors, config, ...props } = this.props;
    const { KEY } = config;
    return (<div {...props}>{
      notes.map((d, i) => (<Key
        className={`${KEY} ${colors[i]}`}
        key={i}
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
  turn: PropTypes.bool,
  inGame: PropTypes.bool,
  className: PropTypes.string,
  config: PropTypes.shape({
    KEY: PropTypes.string,
  }),
};

const { KEY } = Constants.CLASSNAMES;
KeyBoard.defaultProps = { config: KEY };

export default connect(mapStateToProps, mapDispatchToProps)(KeyBoard);
