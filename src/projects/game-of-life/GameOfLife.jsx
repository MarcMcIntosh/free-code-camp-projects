import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, number, array, bool } from 'prop-types';
import { setGame, setSpeed, setSize, nextGen, updateGen, toggleSquare } from './actions';

import Board from './components/Board';

const mapStateToProps = ({ gameOfLife: { game, speed, running, timer, gen, width } }) => ({ game, speed, running, timer, gen, width });


const mapDispatchToProps = dispatch => ({
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
    const { game } = this.props;
    const { classnames } = this.context;
    return (<div className={classnames('game-of-life')}>
      <div className={classnames('game-of-life__media')}>
        <Board data={game} onClick={this._handleClick} />
      </div>
    </div>);
  }
}

GameOfLife.propTypes = {
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
  // onSetSize: func.isRequired,
  // onSetSpeed: func.isRequired,
};

GameOfLife.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
