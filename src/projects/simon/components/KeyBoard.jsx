import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number, arrayOf, oneOf, array, string, func, bool } from 'prop-types';
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
  playing: state.inGame,
  turn: state.turn,
});

const mapDispatchToProps = dispatch => ({
  onAiEnd: () => dispatch(onAiEnd()),
  onAiPlay: n => dispatch(onAiPlay(n)),
});

class KeyBoard extends Component {
  constructor(props) {
    super(props);
    this.AudioContext = null;
    this.aux = null;
    this.compressor = null;
    this.aiplay = this.aiplay.bind(this);
    this.auto = this.auto.bind(this);
    this.onMount = this.onMount.bind(this);
    this.state = { error: '', ready: false };
  }
  componentDidMount() { this.onMount(); }
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
  componentWillUnmount() { return this.AudioContext && this.AudioContext.close(); }
  onMount() {
    const w = typeof window !== 'undefined';
    const a = 'AudioContext' in window || 'webkitAudioContext' in window;
    if (this.AudioContext && !this.state.ready) {
      this.setState({ ready: true, error: '' });
    } else if (w && !a) {
      this.setState({ ready: false, error: 'Browser Audio Api Context un-avaible' });
    } else if (w && a) {
      this.AudioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.aux = this.AudioContext.createGain();

      this.compressor = this.AudioContext.createDynamicsCompressor();

      this.compressor.threshold.value = -10;
      this.compressor.attack.value = 0.5;
      this.aux.gain.value = (this.props.vol / 100);
      this.aux.connect(this.compressor);
      this.compressor.connect(this.AudioContext.destination);
      this.setState({ ready: true });
    }
  }
  aiplay(n, t) {
    const osc = this.AudioContext.createOscillator();
    osc.frequency.value = n;
    osc.type = this.props.wave;
    osc.connect(this.aux);
    this.props.onAiPlay(n);
    osc.start(this.AudioContext.currentTime);
    setTimeout(() => {
      osc.stop(this.AudioContext.currentTime);
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
    if (this.state.error) {
      return (<h4 className="simon__error">{this.state.error}</h4>);
    } else if (!this.state.ready) {
      return (<div className="simon__keys--initailising">
        <h4>Initialising keyboard</h4>
        <button title="Initailise Keyboard" type="button" tabIndex="0" onClick={this.onMount}>Init</button>
      </div>);
    }
    const { ctKeys, notes, wave, colors, turn, playing } = this.props;
    return (<div className="mdc-layout-grid simon__keys">{
      notes.map((d, i) => {
        const k = colors[i];
        const cn = `mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-4-phone simon__key--${k}`;

        return (<Key
          disabled={playing && !turn}
          className={cn}
          key={k}
          color={colors[i]}
          audio={this.AudioContext}
          aux={this.aux}
          frequency={d}
          wave={wave}
          ctKey={ctKeys[i]}
        />);
      })
    }</div>);
  }
}
const { SIN, SQU, SAW, TRI } = Constants.WAVES;

KeyBoard.propTypes = {
  vol: number.isRequired,
  notes: arrayOf(number).isRequired,
  wave: oneOf([SIN, SQU, SAW, TRI]).isRequired,
  colors: arrayOf(string).isRequired,
  challenge: array.isRequired,
  bpm: number.isRequired,
  onAiEnd: func.isRequired,
  onAiPlay: func.isRequired,
  turn: bool.isRequired,
  playing: bool.isRequired,
  ctKeys: arrayOf(string).isRequired,
};

KeyBoard.defaultProps = { ctKeys: ['h', 'j', 'k', 'l'] };

export default connect(mapStateToProps, mapDispatchToProps)(KeyBoard);
