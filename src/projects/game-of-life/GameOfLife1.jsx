import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, number, array, bool } from 'prop-types';
import {
  // setGame,
  setSpeed,
  setSize,
  nextGen,
  updateGen,
  toggleSquare,
  // toggleRules,
  resetGame,
  setRandom,
  togglePlay,
} from './actions';


import Board from './components/Board';
import Rules from './components/Rules';
import Actions from './components/Actions';
import Settings from './components/Settings';

const mapStateToProps = ({ gameOfLife: { game, speed, running, timer, gen, width, height } }) => ({ game, speed, running, timer, gen, width, height });


const mapDispatchToProps = dispatch => ({
  // showRules: () => dispatch(toggleRules()),
  // onSetGame: payload => dispatch(setGame(payload)),
  onNextGen: timer => dispatch(nextGen(timer)),
  onUpdateGen: () => dispatch(updateGen()),
  onResetGame: () => dispatch(resetGame()),
  onSetRandom: () => dispatch(setRandom()),
  onTogglePlay: () => dispatch(togglePlay()),
  onToggleSquare: payload => dispatch(toggleSquare(payload)),
  onSetSpeed: value => dispatch(setSpeed(+value)),
  onSetSize: obj => dispatch(setSize(obj)),
});

class GameOfLife extends Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this._run = this._run.bind(this);
    this._toggleRules = this._toggleRules.bind(this);
    this._toggleSettings = this._toggleSettings.bind(this);
    this._setSize = this._setSize.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.state = {
      width: 'auto',
      showSettings: false,
      showRules: false,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this._setSize);
    window.addEventListener('keydown', this._handleKeyPress);
    this._setSize();
    if (this.props.running) this._run();
  }
  componentDidUpdate(prevProps) {
    const { running, gen, timer } = this.props;
    const timersAreEqual = (timer === prevProps.timer);
    const gensAreEqual = (gen === prevProps.gen);
    const wasRunning = (!running && prevProps.running);
    if (wasRunning) {
      clearTimeout(timer);
    } else if (!gensAreEqual || (timersAreEqual && gensAreEqual) || (running && !prevProps.running)) {
      this._run();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this._setSize);
    window.removeEventListener('keydown', this._handleKeyPress);
  }
  _setSize() {
    const { innerWidth, innerHeight } = window;
    const ratio = Math.min(innerWidth, innerHeight) / innerWidth;
    const per = ratio * 100;
    this.setState({ width: `${per}%` });
  }
  _run() {
    const { timer, running, speed, onNextGen, onUpdateGen } = this.props;
    clearTimeout(timer);
    if (running) { onNextGen(setTimeout(onUpdateGen, speed)); }
  }
  _handleClick(event) {
    const [y, x] = event.target.value.split(' ');
    this.props.onToggleSquare({ x, y });
  }
  _handleKeyPress(event) {
    if (event.which === 32) {
      event.preventDefault();
      this.props.onTogglePlay();
    }
  }
  _toggleRules() {
    this.setState({ showRules: !this.state.showRules });
  }
  _toggleSettings() {
    this.setState({ showSettings: !this.state.showSettings });
  }
  render() {
    const { classnames } = this.context;
    const isBlank = [].concat(...this.props.game).reduce((a, b) => a + b, 0) === 0;
    return (<div className={classnames('game-of-life')} style={{ width: this.state.width }} >
      <header className={classnames('game-of-life__primary')}>
        <h1 className={classnames('game-of-life__title')}>
          {'Conway\'s Game of Life'}
        </h1>
        <hr />
        <h2 className={classnames('game-of-life__subtitle')}>
          Generation: {this.props.gen}
        </h2>
      </header>

      {this.state.showRules && (<Rules />)}

      <Actions running={this.props.running} togglePlay={this.props.onTogglePlay} toggleRules={this._toggleRules} toggleSettings={this._toggleSettings} onSetRandom={this.props.onSetRandom} onResetGame={this.props.onResetGame} isBlank={isBlank} />

      {this.state.showSettings && (<Settings width={this.props.width} height={this.props.height} onSetSize={this.props.onSetSize} running={this.props.running} speed={this.props.speed} onSetSpeed={this.props.onSetSpeed} />)}

      <div className={classnames('game-of-life__media')} >
        <Board game={this.props.game} onClick={this._handleClick} />
      </div>

    </div>);
  }
}

GameOfLife.propTypes = {
  // rules: bool.isRequired,
  running: bool.isRequired,
  gen: number.isRequired,
  timer: number.isRequired,
  speed: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  game: array.isRequired,
  // onSetGame: func.isRequired,
  onToggleSquare: func.isRequired,
  onNextGen: func.isRequired,
  onUpdateGen: func.isRequired,
  onTogglePlay: func.isRequired,
  // showRules: func.isRequired,
  onSetSize: func.isRequired,
  onSetSpeed: func.isRequired,
  onResetGame: func.isRequired,
  onSetRandom: func.isRequired,
};

GameOfLife.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
