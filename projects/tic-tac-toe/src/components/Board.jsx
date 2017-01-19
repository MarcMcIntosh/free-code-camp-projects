import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { onTakeTurn } from '../actions';
import Game from './Game';

const mapStateToProps = state => ({
  board: state.board,
  player: state.player,
  turn: state.turn,
});

const mapDispatchToProps = dispatch => ({
  takeTurn: arr => dispatch(onTakeTurn(arr)),
});


class Board extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(row, col) {
    console.log(row, col, this.props.player);
    // this.props.takeTurn(row, col, this.props.player);
  }
  render() {
    const { board, player, turn } = this.props;

    return (<Game
      board={board}
      player={player}
      turn={turn}
      onClick={this.handleClick}
    />);
  }
}

Board.propTypes = {
  board: PropTypes.array,
  player: PropTypes.bool,
  turn: PropTypes.bool,
  takeTurn: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
