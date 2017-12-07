import React, { Component } from 'react';
import { number, func, string, oneOf, bool, array } from 'prop-types';
import { connect } from 'react-redux';
// import KeyBoard from './components/KeyBoard';
import Key from './components/Key';
import Slider from './components/Slider';
import AudioContext from './components/AudioContext';

import {
  toggleWave,
  toggleSettings,
  setVolume,
  startGame,
  aiStart,
  aiPlay,
  aiEnd,
  toggleMode,
  resetGame,
  resetRound,
  setTone,
  nextRound,
  countUp,
} from './actions';

const mapStateToProps = ({ simon: {
  volume,
  notes,
  wave,
  challenge,
  bpm,
  colors,
  inGame,
  turn,
  round,
  mode,
  settings,
  error,
  tone,
  count,
  aiClock,
  aiCount,
  aiChallenge,
},
}) => ({
  count,
  volume,
  notes,
  wave,
  challenge,
  bpm,
  colors,
  inGame,
  turn,
  round,
  mode,
  settings,
  error,
  tone,
  aiCount,
  aiClock,
  aiChallenge,
});

const mapDispatchToProps = dispatch => ({
  onToggleSettings: () => dispatch(toggleSettings()),
  onToggleWave: () => dispatch(toggleWave()),
  onSetVolume: n => dispatch(setVolume(+n)),
  onStartGame: () => dispatch(startGame()),
  onToggleMode: () => dispatch(toggleMode()),
  onResetGame: () => dispatch(resetGame()),
  onResetRound: () => dispatch(resetRound()),
  onSetTone: n => dispatch(setTone(+n)),
  onNextRound: () => dispatch(nextRound()),
  onCountUp: () => dispatch(countUp()),
  onAiStart: n => dispatch(aiStart(n)),
  onAiPlay: n => dispatch(aiPlay(n)),
  onAiEnd: () => dispatch(aiEnd()),
});

class Simon extends Component {
  constructor(props) {
    super(props);
    this.auto = this.auto.bind(this);
    this.ai = this.ai.bind(this);
  }
  componentDidUpdate(prevProps) {
    const { turn, inGame } = this.props;
    if (inGame && !prevProps.inGame) {
      this.auto();
    } else if (prevProps.turn && !turn) {
      this.auto();
    }
  }
  _playerInput(value) {
    const { count, challenge, turn, inGame, onSetTone, mode, bpm, onResetGame, onResetRound, onNextRound, onCountUp } = this.props;
    if (inGame && !turn) {
      return void 0;
    } else if (!inGame) {
      return onSetTone(value);
    } else if (challenge[count] !== value) {
      const reset = (mode === 'hard') ? onResetGame : onResetRound;
      setTimeout(reset, (60000 / bpm));
    } else {
      const next = (count < challenge.length - 1) ? onCountUp : onNextRound;
      setTimeout(next, (60000 / bpm));
    }
    return onSetTone(value);
  }
  ai() {
    const { aiCount, aiChallenge, aiClock } = this.props;
    const note = aiChallenge[aiCount];
    if (note) {
      this.props.onAiPlay(note);
    } else {
      clearInterval(aiClock);
      this.props.onAiEnd();
    }
  }
  auto() {
    const t = (60 * 1000) / this.props.bpm;
    const timerId = setInterval(this.ai, t / 2);
    this.props.onAiStart(timerId);
  }
  render() {
    const { classnames } = this.context;
    return (<AudioContext
      gain={this.props.volume / 100}
      className={classnames('simon')}
    >
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
          onClick={this.props.onToggleSettings}
          className={classnames('simon__menu')}
        >{(!this.props.settings) ? 'settings' : 'close'}</button>
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

        <Slider name="Volume" min="0" max="100" step="10" onChange={this.props.onSetVolume} label="Vol:" value={this.props.volume} />

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
        className={classnames('simon__control')}
        tabIndex="0"
        title="stop"
        onClick={this.props.onResetGame}
      >replay</button>

      <div className={classnames('simon__keys')}>
        {this.props.notes.map((note, index) => {
          const controlKey = this.props.controlKeys[index];
          const color = this.props.colors[index];
          return (<Key
            title={`${note} Hertz`}
            key={note}
            className={classnames('simon__key', `simon__key--${color}`, {
              [`simon__key--${color}--active`]: this.props.tone === note,
            })}
            frequency={note}
            disabled={this.props.inGame && !this.props.turn}
            wave={this.props.wave}
            playing={this.props.tone === note}
            turn={this.props.turn}
            bpm={this.props.bpm}
            playerInput={this.props.onSetTone}
            ctKey={controlKey}
          />);
        })}
      </div>

    </AudioContext>);
  }
}

Simon.propTypes = {
  volume: number.isRequired,
  bpm: number.isRequired,
  round: number.isRequired,
  count: number.isRequired,
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
  onAiStart: func.isRequired,
  onAiPlay: func.isRequired,
  onAiEnd: func.isRequired,
  onSetTone: func.isRequired,
  onToggleMode: func.isRequired,
  onResetGame: func.isRequired,
  onResetRound: func.isRequired,
  onCountUp: func.isRequired,
  onNextRound: func.isRequired,
  onToggleSettings: func.isRequired,
  controlKeys: array,
  aiCount: number.isRequired,
  aiChallenge: array.isRequired,
  aiClock: number.isRequired,
};

Simon.defaultProps = { controlKeys: ['h', 'j', 'k', 'l'] };

Simon.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Simon);
