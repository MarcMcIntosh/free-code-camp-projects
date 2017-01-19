import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onResetGame, onSelectPlayer } from '../actions';
import TurnDisplay from './TurnDisplay';
import WinnerDisplay from './WinnerDisplay';
import PlayerSelect from './PlayerSelect';

const mapStateToProps = state => ({
  init: state.init,
  done: state.done,
  winner: state.winner,
  turn: state.turn,
  player: state.player,
  ai: state.ai,
});

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(onResetGame()),
  selectPlayer: player => dispatch(onSelectPlayer(player)),
});

const Header = ({
  init,
  player,
  ai,
  turn,
  done,
  winner,
  selectPlayer,
  resetGame,
  ...props
}) => {
  if (init) return (<PlayerSelect onClick={selectPlayer} {...props} />);

  return (<thead {...props}>{
    (done) ? (<WinnerDisplay
      winner={winner}
      player={player}
      ai={ai}
      onClick={resetGame}
    />) : (<TurnDisplay
      player={player}
      turn={turn}
    />)
  }</thead>);
};

Header.propTypes = {
  init: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  turn: PropTypes.oneOf([null, true, false]),
  player: PropTypes.oneOf([null, true, false]),
  ai: PropTypes.oneOf([null, true, false]),
  winner: PropTypes.oneOf([null, true, false]),
  resetGame: PropTypes.func.isRequired,
  selectPlayer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
