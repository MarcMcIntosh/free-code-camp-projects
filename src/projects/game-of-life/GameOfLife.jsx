import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, number, array, bool } from 'prop-types';
import classnames from './styles';
import {
  setGame,
  setSpeed,
  setSize,
  toggleSquare,
  resetGame,
  setRandom,
  togglePlay,
} from './actions';


import Board from './components/Board';
import Rules from './components/Rules';
import Actions from './components/Actions';
import Settings from './components/Settings';

const mapStateToProps = ({ gameOfLife: { game, speed, running, gen, width, height } }) => ({ game, speed, running, gen, width, height });


const mapDispatchToProps = dispatch => ({
  onSetGame: payload => dispatch(setGame(payload)),
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
    this.classnames = classnames;
    this._handleClick = this._handleClick.bind(this);
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
  getChildContext() { return { classnames: this.classnames }; }

  componentDidMount() {
    window.addEventListener('resize', this._setSize);
    window.addEventListener('keydown', this._handleKeyPress);
    this._setSize();
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
    const isBlank = [].concat(...this.props.game).reduce((a, b) => a + b, 0) === 0;
    return (<div className={this.classnames('game-of-life')} style={{ width: this.state.width }} >
      <header className={this.classnames('game-of-life__primary')}>
        <h1 className={this.classnames('game-of-life__title')}>
          {'Conway\'s Game of Life'}
        </h1>
        <hr />
        <h2 className={this.classnames('game-of-life__subtitle')}>
          Generation: {this.props.gen}
        </h2>
      </header>

      {this.state.showRules && (<Rules />)}

      <Actions running={this.props.running} togglePlay={this.props.onTogglePlay} toggleRules={this._toggleRules} toggleSettings={this._toggleSettings} onSetRandom={this.props.onSetRandom} onResetGame={this.props.onResetGame} isBlank={isBlank} />

      {this.state.showSettings && (<Settings width={this.props.width} height={this.props.height} onSetSize={this.props.onSetSize} running={this.props.running} speed={this.props.speed} onSetSpeed={this.props.onSetSpeed} />)}

      <div className={this.classnames('game-of-life__media')} >
        <Board game={this.props.game} speed={this.props.speed} setGame={this.props.onSetGame} running={this.props.running} onClick={this._handleClick} />
      </div>
    </div>);
  }
}

GameOfLife.propTypes = {
  running: bool.isRequired,
  gen: number.isRequired,
  speed: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  game: array.isRequired,
  onToggleSquare: func.isRequired,
  onSetGame: func.isRequired,
  onTogglePlay: func.isRequired,
  onSetSize: func.isRequired,
  onSetSpeed: func.isRequired,
  onResetGame: func.isRequired,
  onSetRandom: func.isRequired,
};

GameOfLife.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
