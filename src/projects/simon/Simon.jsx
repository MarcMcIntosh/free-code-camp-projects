import React, { Component } from 'react';
import { number, func, string, oneOf, bool, array } from 'prop-types';
import { connect } from 'react-redux';
import KeyBoard from './components/KeyBoard';
import Round from './components/Round';
import Slider from './components/Slider';

import { onToggleWave, onSetVolume, onStartGame, onAiEnd, onAiPlay, onToggleMode, onResetGame } from './actions';


const mapStateToProps = ({ simon: { volume, notes, wave, challenge, bpm, colors, inGame, turn, round, mode, settings } }) => ({ volume, notes, wave, challenge, bpm, colors, inGame, turn, round, mode, settings });

const mapDispatchToProps = dispatch => ({
  onToggleWave: () => dispatch(onToggleWave()),
  onSetVolume: n => dispatch(onSetVolume(+n)),
  onStartGame: () => dispatch(onStartGame()),
  onAiEnd: () => dispatch(onAiEnd()),
  onAiPlay: n => dispatch(onAiPlay(+n)),
  onToggleMode: () => dispatch(onToggleMode()),
  onResetGame: () => dispatch(onResetGame()),
});

class Simon extends Component {
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('simon')}>

      <h1 className={classnames('simon__header')}>
      Simon says <small className={classnames('simon__round')}>
        Round:
        </small>
        <Round className={classnames('simon__number')} />
        <button
          type="button"
          title="settings"
          tabIndex="0"
          onClick={this.showSettings}
          className={classnames('simon__menu')}
        >{(!this.state.showSettings) ? 'settings' : 'close'}</button>
      </h1>

      {(this.state.showSettings) ? (<section className={classnames('simon__settings')}>

        <button
          type="button"
          tabIndex="0"
          title="Toggle difficulty setting"
          onClick={this.props.onToggleMode}
          value={this.props.mode}
          className={classnames('simon__button', 'simon__button--primary', 'simon__button--raised')}
        >{this.props.mode}</button>

        <Slider min="0" max="100" step="10" onChange={this.props.onSetVolume} label="Volume" value={this.props.volume} />

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

      <KeyBoard ctKeys={['h', 'j', 'k', 'l']} />

    </div>);
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
  wave: oneOf(['sine', 'square', 'sawtooth', 'triangle' ]).isRequired,
  mode: oneOf(['normal', 'hard']),
  colors: array.isRequired,
  error: string.isRequired,
  onToggleWave: func.isRequired,
  onSetVolume: func.isRequired,
  onStartGame: func.isRequired,
  onAiEnd: func.isRequired,
  onAiPlay: func.isRequired,
  onToggleMode: func.isRequired,
  onResetGame: func.isRequired,
};

Simon.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Simon);
