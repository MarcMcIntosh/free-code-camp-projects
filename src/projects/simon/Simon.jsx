import React, { Component } from 'react';
import { number, func, string, oneOf, bool, array } from 'prop-types';
import { connect } from 'react-redux';
// import KeyBoard from './components/KeyBoard';
import Key from './components/Key';
import Slider from './components/Slider';

import { onToggleWave, onSetVolume, onStartGame, onAiEnd, onAiPlay, onToggleMode, onResetGame, onPlayerInput, onError } from './actions';


const mapStateToProps = ({ simon: { volume, notes, wave, challenge, bpm, colors, inGame, turn, round, mode, settings } }) => ({ volume, notes, wave, challenge, bpm, colors, inGame, turn, round, mode, settings });

const mapDispatchToProps = dispatch => ({
  onToggleWave: () => dispatch(onToggleWave()),
  onSetVolume: n => dispatch(onSetVolume(+n)),
  onStartGame: () => dispatch(onStartGame()),
  onAiEnd: () => dispatch(onAiEnd()),
  onAiPlay: n => dispatch(onAiPlay(+n)),
  onToggleMode: () => dispatch(onToggleMode()),
  onResetGame: () => dispatch(onResetGame()),
  onError: str => dispatch(onError(str)),
  onPlayerInput: n => dispatch(onPlayerInput(+n)),
});

class Simon extends Component {
  constructor(props) {
    super(props);
    this.AudioContext = null;
    this.aux = null;
    this.compressor = null;
    this.aiplay = this.aiplay.bind(this);
    this.auto = this.auto.bind(this);
  }
  componentWillMount() {
    if (!('AudioContext' in window || 'webkitAudioContext' in window)) {
      this.props.onError('Browser Audio Api Context un-avaible');
    } else {
      this.AudioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.aux = this.AudioContext.createGain();
      this.compressor = this.AudioContext.createDynamicsCompressor();
      this.compressor.threshold.value = -10;
      this.compressor.attack.value = 0.5;
      this.aux.gain.value = (this.props.volume / 100);
      this.aux.connect(this.compressor);
      this.compressor.connect(this.AudioContext.destination);
    }
  }
  componentWillReceiveProps(nextProps) {
    const { challenge, volume, bpm } = this.props;
    if (challenge.length < nextProps.challenge.length) {
      setTimeout(() => {
        this.auto(nextProps.challenge);
      }, 60000 / bpm);
    }
    if (volume !== nextProps.volume) {
      this.aux.gain.value = nextProps.volume / 100;
    }
  }
  componentWillUnmount() { return this.AudioContext && this.AudioContext.close(); }
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
    }, t);
  }
  auto(arr, index) {
    const i = index || 0;
    const t = (60 * 1000) / this.props.bpm;
    if (i < arr.length) {
      this.aiplay(arr[i], t);
      setTimeout(() => { this.auto(arr, i + 1); }, t * 2);
    } else { this.props.onAiEnd(); }
  }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('simon')}>
      {this.props.error && (<p>{this.props.error}</p>)}
      <h1 className={classnames('simon__header')}>
      Simon says <small className={classnames('simon__round')}>
        Round:
        </small>
        <span className={classnames('simon__number')}>{this.props.round}</span>

        <button
          type="button"
          title="settings"
          tabIndex="0"
          onClick={this.showSettings}
          className={classnames('simon__menu')}
        >{(!this.state.showSettings) ? 'settings' : 'close'}</button>
      </h1>

      {(this.props.settings) ? (<section className={classnames('simon__settings')}>

        <button
          type="button"
          tabIndex="0"
          title="Toggle difficulty setting"
          onClick={this.props.onToggleMode}
          value={this.props.mode}
          className={classnames('simon__button', 'simon__button--primary', 'simon__button--raised')}
        >{this.props.mode}</button>

        <Slider min="0" max="100" step="10" onChange={this.props.onSetVolume} label="Vol:" value={this.props.volume} />

        <button
          type="button"
          title="Tone control"
          tabIndex="0"
          className={classnames('simon__wave', this.props.wave && `simon__wave--${this.props.wave}`)}
          onClick={this.props.onToggleWave}
          value={this.props.wave}
        />

        <p className="mdc-typography--body1">
          <span className="mdc-typography--body2"> Contol Keys</span> h j k l </p>

      </section>) : null }

      <button
        type="button"
        className={classnames('simon__control')}
        tabIndex="0"
        title="start"
        onClick={this.props.onStartGame}
        disabled={this.props.inGame}
      >play_circle_outline</button>

      <button
        classNames={classnames('simon__control')}
        tabIndex="0"
        title="stop"
        onClick={this.props.onResetGame}
      >replay</button>

      <div className={classnames('simon__keys')}>
        {this.props.notes.map((note, index) => {
          const controlKey = this.props.controlKeys[index];
          const color = this.props.colors[index];
          return (<Key
            className={classnames('simon__key', `simon__key--${color}`, {
              [`simon__key--${color}--active`]: this.props.tone === note,
            })}
            key={note}
            audio={this.AudioContext}
            aux={this.aux}
            frequency={note}
            disabled={this.props.inGame && !this.props.turn}
            wave={this.props.wave}
            tone={this.props.tone}
            playing={this.props.inGame}
            turn={this.props.turn}
            bpm={this.props.bpm}
            playerInput={this.props.onPlayerInput}
            ctKey={controlKey}
          />);
        })}
      </div>

    </div>);
  }
}

Simon.propTypes = {
  volume: number.isRequired,
  bpm: number.isRequired,
  round: number.isRequired,
  // count: number.isRequired,
  tone: number.isRequired,
  settings: bool.isRequired,
  turn: bool.isRequired,
  inGame: bool.isRequired,
  notes: array.isRequired,
  challenge: array.isRequired,
  wave: oneOf(['sine', 'square', 'sawtooth', 'triangle']).isRequired,
  mode: oneOf(['normal', 'hard']).isRequired,
  colors: array.isRequired,
  error: string.isRequired,
  onToggleWave: func.isRequired,
  onSetVolume: func.isRequired,
  onStartGame: func.isRequired,
  onAiEnd: func.isRequired,
  onAiPlay: func.isRequired,
  onToggleMode: func.isRequired,
  onResetGame: func.isRequired,
  onError: func.isRequired,
  onPlayerInput: func.isRequired,
  controlKeys: array,
};

Simon.defaultProps = { controlKeys: ['h', 'j', 'k', 'l'] };

Simon.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Simon);
