/* eslint jsx-a11y/no-static-element-interactions: off */
/* eslint react/no-array-index-key: off */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, number, array, bool } from 'prop-types';
import { setGame, nextGen, updateGen, toggleSquare } from '../actions';
// import Table from './Table';
import Button from './Button';


const mapStateToProps = (state) => {
  const { game, speed, running, timer, gen } = state;
  return { game, speed, running, timer, gen };
};

const mapDispatchToProps = dispatch => ({
  onSetGame: payload => dispatch(setGame(payload)),
  onNextGen: timer => dispatch(nextGen(timer)),
  onUpdateGen: () => dispatch(updateGen()),
  onToggleSquare: payload => dispatch(toggleSquare(payload)),
});

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.run = this.run.bind(this);
  }
  componentDidMount() {
    if (this.props.running) this.run();
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
      this.run();
    }
  }
  run() {
    clearTimeout(this.props.timer);
    this.props.onNextGen(setTimeout(() => this.props.onUpdateGen(), this.props.speed));
  }
  /* handleClick(event) {
    const nm = event.target.name.split('.');
    const y = nm[0];
    const x = nm[1];
    const v = event.target.value;
    const arr = this.props.game.slice();
    arr[y][x] = v ? 1 : 0;
    this.props.onSetGame(arr);
  } */
  handleClick(event) {
    const [y, x] = event.target.value.split('.');
    this.props.onToggleSquare({ y, x });
  }
  render() {
    return (<table className="game-of-life__board">
      <tbody>{this.props.game.map((y, i) => (<tr key={i}>{
        y.map((x, ii) => (<td key={ii}><Button
          value={`${i}.${ii}`}
          onClick={this.handleClick}
          className={x ? 'cell cell--alive' : 'cell cell--dead'}
        /></td>))
      }</tr>))}</tbody>
    </table>);
  }
}

Game.propTypes = {
  game: array.isRequired,
  running: bool.isRequired,
  // onSetGame: func.isRequired,
  onToggleSquare: func.isRequired,
  onNextGen: func.isRequired,
  onUpdateGen: func.isRequired,
  gen: number.isRequired,
  timer: number.isRequired,
  speed: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
