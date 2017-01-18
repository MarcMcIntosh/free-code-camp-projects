import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { onTakeTurn } from '../actions';
import Button from './Button';

const mapStateToProps = state => ({
  board: state.board,
  player: state.player,
  ai: state.ai,
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
  handleClick(event) {
    console.log(event);
  }
  render() {
    const { board, player, ai, turn, ...props } = this.props;
    return (<table {...props}>
      <thead>{(turn === player) ? 'Player\'s ' : 'Computer\'s '}Turn</thead>
      <tbody>{
        board.map((row, i) => (<tr key={i}>{
          row.map((cell, ii) => (<td key={ii}>
            <Button
              disabled={turn !== player || cell === (ai || player)}
              onClick={this.handleClick}
              value={`${i}:${ii}`}
            >{cell}</Button>
          </td>))
        }</tr>))
      }</tbody>
    </table>);
  }
}

Board.propTypes = {
  board: PropTypes.array,
  player: PropTypes.string,
  ai: PropTypes.string,
  turn: PropTypes.string,
  takeTurn: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
