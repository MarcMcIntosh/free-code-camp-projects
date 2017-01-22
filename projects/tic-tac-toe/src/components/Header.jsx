import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onResetGame, onSelectPlayer } from '../actions';
import TurnDisplay from './TurnDisplay';
import WinnerDisplay from './WinnerDisplay';
import PlayerSelect from './PlayerSelect';
import Constants from '../Constants';


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

  return (<div {...props}>{
    (done) ? (<WinnerDisplay
      winner={winner}
      player={player}
      ai={ai}
      onClick={resetGame}
    />) : (<TurnDisplay
      player={player}
      turn={turn}
    />)
  }</div>);
};

const { _, O, X } = Constants.PLAYER;
Header.propTypes = {
  init: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  turn: PropTypes.oneOf([_, O, X]),
  player: PropTypes.oneOf([_, O, X]),
  ai: PropTypes.oneOf([_, O, X]),
  winner: PropTypes.oneOf([_, O, X]),
  resetGame: PropTypes.func.isRequired,
  selectPlayer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
