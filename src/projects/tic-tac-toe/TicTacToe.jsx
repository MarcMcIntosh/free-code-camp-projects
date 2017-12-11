import React, { PureComponent } from 'react';
import { bool, oneOf, func, array, number } from 'prop-types';
import { connect } from 'react-redux';
import minimax from './util/minimax';
import Header from './components/Header';
import { takeTurn, resetGame, setPlayer } from './actions';
import Constants from './Constants';

const { _, O, X } = Constants.PLAYER;

const mapStateToProps = ({
  ticTacToe: { timerId, board, player, turn, ai, init, winner, done, difficulty },
}) => ({ board, player, turn, ai, init, winner, done, timerId, difficulty });

const mapDispatchToProps = dispatch => ({
  takeTurn: payload => dispatch(takeTurn(payload)),
  resetGame: () => dispatch(resetGame()),
  setPlayer: event => dispatch(setPlayer(event.target.value)),
});


class TicTacToe extends PureComponent {
  constructor(props) {
    super(props);
    this.minimax = minimax;
    this.aiMove = this.aiMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidUpdate() {
    if (!this.props.init && !this.props.done && this.props.turn === this.props.ai) {
      this.aiMove();
    }
  }
  aiMove() {
    const { board, ai, difficulty } = this.props;
    const move = this.minimax(board, ai, 0, ai, difficulty);
    return this.props.takeTurn(move);
  }
  handleClick(event) {
    this.props.takeTurn(event.target.value);
  }
  render() {
    const { init, done, turn, player, winner, board } = this.props;
    const { classnames } = this.context;
    return (<div className={classnames('tic-tac-toe')}>
      {/* Inofmation display */}
      <Header init={init} done={done} turn={turn} player={player} winner={winner} resetGame={this.props.resetGame} selectPlayer={this.props.selectPlayer} />

      {/* Game */}
      <div className={classnames('tic-tac-toe__board')}>{board.map((d, i) => {
        const k = `cell-${i}`;
        return (<button
          type="button"
          key={k}
          value={i}
          onClick={this.handleClick}
          disabled={(done || player !== turn || d !== _)}
          className={classnames({
            'tic-tac-toe__cell': true,
            'tic-tac-toe__cell--X': d === X,
            'tic-tac-toe__cell--O': d === O,
          })}
        />);
      })}</div>

    </div>);
  }
}

TicTacToe.propTypes = {
  init: bool.isRequired,
  done: bool.isRequired,
  turn: oneOf([_, O, X]).isRequired,
  player: oneOf([_, O, X]).isRequired,
  winner: oneOf([_, O, X]).isRequired,
  ai: oneOf([_, O, X]).isRequired,
  difficulty: number.isRequired,
  board: array.isRequired,
  resetGame: func.isRequired,
  selectPlayer: func.isRequired,
  takeTurn: func.isRequired,
};

TicTacToe.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
