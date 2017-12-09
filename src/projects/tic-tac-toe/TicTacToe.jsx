import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bool, oneOf, func, array } from 'prop-types';
import Header from './components/Header';
import {
  onTakeTurn,
  onAiMove,
  onCheckBoard,
  onResetGame,
  onSelectPlayer,
} from './actions';
import Constants from './Constants';

const { _, O, X } = Constants.PLAYER;

const mapStateToProps = ({
  ticTacToe: { board, player, turn, ai, init, winner, done },
}) => ({ board, player, turn, ai, init, winner, done });

const mapDispatchToProps = dispatch => ({
  takeTurn: (arr, i) => dispatch(onTakeTurn(arr, i)),
  aiMove: (arr, i) => dispatch(onAiMove(arr, i)),
  checkBoard: arr => dispatch(onCheckBoard(arr)),
  resetGame: () => dispatch(onResetGame()),
  selectPlayer: event => dispatch(onSelectPlayer(event.target.value)),
});


class TicTacToe extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { turn, checkBoard, init, aiMove } = this.props;

    if (!init && !nextProps.done && turn !== nextProps.turn) { checkBoard(nextProps.board); }

    if (!nextProps.init && nextProps.ai === nextProps.turn) { aiMove(nextProps.board, nextProps.ai); }
  }
  handleClick(event) {
    const { takeTurn, player, board } = this.props;
    const arr = board.slice();
    arr[event.target.value] = player;
    return takeTurn(arr, player);
  }
  render() {
    const { selectPlayer, init, done, turn, player, winner, resetGame, board } = this.props;

    return (<div className="tic-tac-toe">
      {/* Inofmation display */}
      <Header init={init} done={done} turn={turn} player={player} winner={winner} resetGame={resetGame} selectPlayer={selectPlayer} />

      {/* Game */}
      <div className="tic-tac-toe__board">{board.map((d, i) => {
        let cn = 'tic-tac-toe__cell';
        switch (d) {
          case X: cn += ' tic-tac-toe__cell--X'; break;
          case O: cn += ' tic-tac-toe__cell--O'; break;
          /* no default */
        }
        const k = `cell-${i}`;
        const dis = (done || player !== turn || d === X || d === O);
        return (<button type="button" className={cn} key={k} value={i} onClick={this.handleClick} disabled={dis} />);
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
  resetGame: func.isRequired,
  selectPlayer: func.isRequired,
  takeTurn: func.isRequired,
  aiMove: func.isRequired,
  checkBoard: func.isRequired,
  board: array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
