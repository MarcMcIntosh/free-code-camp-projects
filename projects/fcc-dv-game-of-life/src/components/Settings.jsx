import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
  togglePlay,
  resetGame,
  setSpeed,
  setSize,
  setRandom,
} from '../actions';
import Button from './Button';
import PlayPause from './PlayPause';
import Reset from './Reset';

const mapStateToProps = (state) => {
  const { speed, running, width, timer } = state;
  return { speed, running, width, timer };
};

const mapDispatchToProps = dispatch => ({
  onTogglePlay: () => dispatch(togglePlay()),
  onResetGame: () => dispatch(resetGame()),
  onSetSpeed: event => dispatch(setSpeed(event.target.value)),
  onSetSize: obj => dispatch(setSize(obj)),
  onSetRandom: () => dispatch(setRandom()),
});

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.expand = this.expand.bind(this);
  }
  expand() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const {
      running,
      speed,
      width,
      timer,
      onTogglePlay,
      onResetGame,
      onSetSpeed,
      onSetSize,
      onSetRandom,
    } = this.props;
    const { expanded } = this.state;

    return (<section className="game-of-life__settings">
      <header className="game-of-life__heading">
        <h1 className="game-of-life__title">
          {'Conway\'s Game of Life'}
        </h1>
      </header>
      <Button
        title={expanded ? 'close settings' : 'open settings'}
        className="material-icons settings" onClick={this.expand}
      >{expanded ? 'close' : 'settings'}</Button>
      <PlayPause
        running={running}
        onClick={() => {
          clearTimeout(timer);
          return onTogglePlay();
        }}
      />
      <Reset onClick={onResetGame} />
      <Button
        title="randomize"
        className="random-game"
        onClick={() => {
          clearTimeout(timer);
          return onSetRandom();
        }}
      >Randomize</Button>

      <section className={`settings__advanced--${(expanded) ? 'open' : 'closed'}`}>
        <div className="speed">
        Game Speed
        <input
          type="range"
          step="100" min="0" max="1000" value={speed}
          onChange={onSetSpeed}
          className="mdc-range-slider mdc-range-slider--primary"
        /></div>

        <div className="cells"> Number of Cells
          <Button
            disabled={width === 16}
            onClick={() => onSetSize({ width: 16, height: 16 })}
          >16x16</Button>
          <Button
            disabled={width === 50}
            onClick={() => onSetSize({ width: 50, height: 30 })}
          >50X30</Button>
          <Button
            disabled={width === 70}
            onClick={() => onSetSize({ width: 70, height: 50 })}
          >70X50</Button>
          <Button
            disabled={width === 1000}
            onClick={() => onSetSize({ width: 100, height: 80 })}
          >100X80</Button>
        </div>
      </section>
    </section>);
  }
}

const { bool, number, func } = PropTypes;
Settings.propTypes = {
  running: bool.isRequired,
  width: number.isRequired,
  speed: number.isRequired,
  timer: number.isRequired,
  onTogglePlay: func.isRequired,
  onSetSize: func.isRequired,
  onSetSpeed: func.isRequired,
  onResetGame: func.isRequired,
  onSetRandom: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
