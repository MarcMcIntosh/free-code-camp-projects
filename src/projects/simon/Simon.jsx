import React, { Component } from 'react';
import { number, func, oneOf, bool, array } from 'prop-types';
import { connect } from 'react-redux';
// import KeyBoard from './components/KeyBoard';
import Key from './components/Key';
import Slider from './components/Slider';
import AudioContext from './components/AudioContext';
import IconToggle from './components/IconToggle';
import Switch from './components/Switch';

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
  handleError,
} from './actions';

const mapStateToProps = ({ simon: {
  volume,
  notes,
  wave,
  // challenge,
  bpm,
  colors,
  inGame,
  turn,
  round,
  mode,
  settings,
  error,
  tone,
  // count,
  aiClock,
  aiCount,
  aiChallenge,
},
}) => ({
  // count,
  volume,
  notes,
  wave,
  // challenge,
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
  handleError: (mode, duration) => dispatch(handleError(mode, duration)),
});

class Simon extends Component {
  constructor(props) {
    super(props);
    this.auto = this.auto.bind(this);
    this.ai = this.ai.bind(this);
    this._playerInput = this._playerInput.bind(this);
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
    const { turn, error, inGame, aiChallenge, aiCount, mode, bpm } = this.props;
    const correct = aiChallenge[aiCount] === value;
    const index = aiChallenge.length - 1;
    if (inGame && !turn) {
      return void 0;
    } else if (error) {
      this.props.onSetTone(value);
    } else if (aiCount === 0 && value === -1) {
      this.props.onSetTone(value);
    } else if (correct && aiCount < index) {
      this.props.onCountUp();
    } else if (correct && aiCount === index) {
      this.props.onNextRound();
    } else if (inGame && turn && !correct) {
      this.props.handleError(mode, 60000 / bpm);
    }
    return this.props.onSetTone(value);
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
      className={classnames('simon', this.props.error && 'simon--error')}
    >
      <h1 className={classnames('simon__round')}>
        Round: <span className={classnames('simon__number')}>{this.props.round}</span>
      </h1>

      <i
        role="button"
        title="settings"
        tabIndex="-1"
        onClick={this.props.onToggleSettings}
        className={classnames('simon__menu')}
      >{(!this.props.settings) ? 'settings' : 'close'}</i>

      {(this.props.settings) ? (<section className={classnames('simon__settings')}>

        <Switch name="mode" label="Difficulty" onChange={this.props.onToggleMode} value={this.props.mode} />

        <hr className={classnames('simon__rule')} />

        <label htmlFor="Volume" className={classnames('simon__helptext')}>Volume</label>
        <Slider name="Volume" min="0" max="100" step="10" onChange={this.props.onSetVolume} value={this.props.volume} label="Volume" />

        <hr className={classnames('simon__rule')} />

        <div>
          <label htmlFor="wave" className={classnames('simon__helptext')}>Wave</label>
        </div>
        <button
          type="button"
          name="wave"
          title="Wave shape"
          tabIndex="0"
          className={classnames('simon__wave', this.props.wave && `simon__wave--${this.props.wave}`)}
          onClick={this.props.onToggleWave}
          value={this.props.wave}
        />

        <hr className={classnames('simon__rule')} />
      </section>) : null }


      <IconToggle title={(!this.props.inGame) ? 'start' : 'reset'} onClick={(!this.props.inGame) ? (this.props.onStartGame) : (this.props.onResetGame)}>{(!this.props.inGame) ? 'play_circle_outline' : 'replay'}</IconToggle>

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
            playerInput={this._playerInput}
            ctKey={controlKey}
          />);
        })}
      </div>

      <p className={classnames('simon__helptext')}>Contol Keys: h j k l </p>

    </AudioContext>);
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
  // challenge: array.isRequired,
  wave: oneOf(['sine', 'square', 'sawtooth', 'triangle']).isRequired,
  mode: oneOf(['normal', 'hard']).isRequired,
  colors: array.isRequired,
  error: bool.isRequired,
  handleError: func.isRequired,
  onToggleWave: func.isRequired,
  onSetVolume: func.isRequired,
  onStartGame: func.isRequired,
  onAiStart: func.isRequired,
  onAiPlay: func.isRequired,
  onAiEnd: func.isRequired,
  onSetTone: func.isRequired,
  onToggleMode: func.isRequired,
  onResetGame: func.isRequired,
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
