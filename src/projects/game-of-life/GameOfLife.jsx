import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, number, array, bool } from 'prop-types';
import { setGame, setSpeed, setSize, nextGen, updateGen, toggleSquare, toggleRules } from './actions';


import Board from './components/Board';
import Switch from './components/Switch';

const mapStateToProps = ({ gameOfLife: { game, speed, running, timer, gen, width, rules } }) => ({ game, speed, running, timer, gen, width, rules });


const mapDispatchToProps = dispatch => ({
  showRules: () => dispatch(toggleRules()),
  onSetGame: payload => dispatch(setGame(payload)),
  onNextGen: timer => dispatch(nextGen(timer)),
  onUpdateGen: () => dispatch(updateGen()),
  onToggleSquare: payload => dispatch(toggleSquare(payload)),
  onSetSpeed: event => dispatch(setSpeed(+event.target.value)),
  onSetSize: obj => dispatch(setSize(obj)),
});

class GameOfLife extends PureComponent {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this._run = this._run.bind(this);
  }
  componentDidMount() {
    if (this.props.running) this._run();
  }
  componentDidUpdate(prevProps) {
    if (!this.props.running) {
      clearTimeout(this.props.timer);
    } else if (
      this.props.gen !== prevProps.gen || (
        this.props.timer === prevProps.timer
        && this.props.gen === prevProps.gen
      ) || (
        this.props.running && !prevProps.running
      )
    ) {
      this._run();
    }
  }
  _run() {
    clearTimeout(this.props.timer);
    this.props.onNextGen(setTimeout(() => this.props.onUpdateGen(), this.props.speed));
  }
  _handleClick(event) {
    const [x, y] = event.target.value.split('.');
    this.props.onToggleSquare({ x, y });
  }
  render() {
    const { game, rules } = this.props;
    const { classnames } = this.context;
    return (<div className={classnames('game-of-life')}>
      <header className={classnames('game-of-life__primary')}>
        <h1 className={classnames('game-of-life__title')}>
          {'Conway\'s Game of Life'}
        </h1>
        <h2 className={classnames('game-of-life__subtitle')}>
          <Switch label="Rules" name="rules" onChange={this.props.showRules} />
        </h2>
        <hr />
      </header>
      <section className={classnames('game-of-life__rules', 'game-of-life__rules--disabled' && rules)}>
        <li>Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.</li>
        <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
        <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
      </section>
      <div className={classnames('game-of-life__media')}>
        <Board data={game} onClick={this._handleClick} />
      </div>
    </div>);
  }
}

GameOfLife.propTypes = {
  rules: bool.isRequired,
  running: bool.isRequired,
  gen: number.isRequired,
  timer: number.isRequired,
  speed: number.isRequired,
  // width: number.isRequired,
  game: array.isRequired,
  // onSetGame: func.isRequired,
  onToggleSquare: func.isRequired,
  onNextGen: func.isRequired,
  onUpdateGen: func.isRequired,
  showRules: func.isRequired,
  // onSetSize: func.isRequired,
  // onSetSpeed: func.isRequired,
};

GameOfLife.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
