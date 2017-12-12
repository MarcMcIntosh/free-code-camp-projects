import React, { Component } from 'react';
import { bool, oneOf, func, array, number } from 'prop-types';
import { connect } from 'react-redux';
import minimax from './util/minimax';
// import Header from './components/Header';
import Slider from './components/Slider';
import PlayerSelect from './components/PlayerSelect';
import GameOver from './components/GameOver';

import { takeTurn, resetGame, setPlayer, setDifficulty } from './actions';
import Constants from './Constants';

const { _, O, X } = Constants.PLAYER;

const mapStateToProps = ({
  ticTacToe: { timerId, board, player, turn, ai, init, winner, done, difficulty },
}) => ({ board, player, turn, ai, init, winner, done, timerId, difficulty });

const mapDispatchToProps = dispatch => ({
  takeTurn: payload => dispatch(takeTurn(payload)),
  resetGame: () => dispatch(resetGame()),
  setPlayer: event => dispatch(setPlayer(event.target.value)),
  setDifficulty: value => dispatch(setDifficulty(value)),
});


class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.minimax = minimax;
    this.aiMove = this.aiMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.gameOverMessage = this.gameOverMessage.bind(this);
  }
  componentDidUpdate() {
    if (!this.props.init && this.props.ai && this.props.turn === this.props.ai) {
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
  gameOverMessage() {
    if (this.props.winner === this.props.player) {
      return 'Contragulations, You won';
    } else if (this.props.winner === this.props.ai) {
      return 'Try again';
    }
    return 'Draw, try again';
  }
  render() {
    const { done, turn, player, board } = this.props;
    const { classnames } = this.context;
    return (<div className={classnames('tic-tac-toe')}>
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

      {/* Inofmation display */}
      <div className={classnames('tic-tac-toe__info')}>
        {this.props.init && (<PlayerSelect onClick={this.props.setPlayer} />)}

        {this.props.done && (<GameOver onClick={this.props.resetGame}>{this.gameOverMessage()}</GameOver>)}

        <Slider onChange={this.props.setDifficulty} value={this.props.difficulty} min="1" max="9" name="difficulty" label="difficulty" step="1" />
        <label htmlFor="difficulty" className={classnames('tic-tac-toe__label')}>Difficulty</label>
      </div>

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
  setPlayer: func.isRequired,
  takeTurn: func.isRequired,
  setDifficulty: func.isRequired,
};

TicTacToe.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
