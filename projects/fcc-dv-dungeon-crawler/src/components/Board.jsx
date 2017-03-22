import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Touch from './Touch';
import setWindowSize from '../actions/Window';
import { resetMap, fillMap } from '../actions/Map';
import { reverseLookup, PLAYER } from '../utility/GameConstants';
import { levelUp } from '../actions/Entities';
import onMove from '../actions/Move';

const mapStateToProps = state => ({
  player: state.entities.player,
  // entities: state.entities,
  // map: state.map,
  // occupiedSpaces: state.occupiedSpaces,
  level: state.level,
  // windowHeight: state.windowHeight,
  // windowWidth: state.windowWidth,
  darkness: state.darkness,
});

const mapDispatchToProps = dispatch => ({
  setWindowSize: () => dispatch(setWindowSize()),
  resetMap: () => dispatch(resetMap()),
  levelUp: (attack, health, toNextLevel) => (
    dispatch(levelUp(attack, health, toNextLevel))
  ),
  onMove: vector => dispatch(onMove(vector)),
  onFill: () => dispatch(fillMap()),
});

class Board extends Component {
  constructor() {
    super();
    this._handleKeypress = this._handleKeypress.bind(this);
    this._handleSwipe = this._handleSwipe.bind(this);
  }
  componentDidMount() {
    this.props.resetMap();
    this.props.onFill();
    if (this.props.player.toNextLevel <= 0) {
      this._playerLeveledUp();
    }
    this.props.setWindowSize();
    window.addEventListener('keydown', this._handleKeypress);
    window.addEventListener('resize', this.props.setWindowSize);
  }
  componentWillUnmount() {
      // this.unsubscribe();
    window.removeEventListener('keydown', this._handleKeypress);
    window.removeEventListener('resize', setWindowSize);
  }
  _playerLeveledUp() {
    const currLevel = this.props.player.level + 1;
    const attack = currLevel * PLAYER.attack;
    const health = currLevel * PLAYER.health;
    const toNext = (currLevel + 1) * PLAYER.toNextLevel;
    this.props.levelUp(attack, health, toNext);
  }
  _handleKeypress(event) {
    switch (event.keyCode) {
      case 37: this.props.onMove({ x: -1, y: 0 }); break;
      case 38: this.props.onMove({ x: 0, y: -1 }); break;
      case 39: this.props.onMove({ x: 1, y: 0 }); break;
      case 40: this.props.onMove({ x: 0, y: 1 }); break;
      default: event.preventDefault();
    }
  }

  render() {
    const {
      map,
      entities,
      occupiedSpaces,
      entities: { player },
      windowHeight,
      windowWidth,
      darkness,
    } = this.props;
    const SIGHT = 7;
    // This should match the css height and width in pixels
    const tileSize = document.getElementsByClassName('tile').item(0) ? document.getElementsByClassName('tile').item(0).clientHeight : 10;

    // Get start coords for current viewport
    const numCols = Math.floor((windowWidth / tileSize) - 5);
    const numRows = Math.floor((windowHeight / tileSize) - 17);
    let startX = Math.floor(player.x - (numCols / 2));
    let startY = Math.floor(player.y - (numRows / 2));
    // Make sure start isn't less than 0
    if (startX < 0) startX = 0;
    if (startY < 0) startY = 0;
    // Set end coords
    let endX = startX + numCols;
    let endY = startY + numRows;
    // Final validation of start and end coords
    if (endX > map.length) {
      startX = numCols > map.length ? 0 : startX - (endX - map.length);
      endX = map.length;
    }
    if (endY > map[0].length) {
      startY = numRows > map[0].length ? 0 : startY - (endY - map[0].length);
      endY = map[0].length;
    }

    // Create visible gameboard
    const rows = [];
    let tileClass;
    let row;
    for (let y = startY; y < endY; y += 1) {
      row = [];
      for (let x = startX; x < endX; x += 1) {
        const entity = occupiedSpaces[`${x}x${y}`];
        if (!entity) {
          tileClass = reverseLookup[map[x][y]];
        } else {
          tileClass = entities[entity].entityType;
        }
        if (darkness) {
          // check if it should be dark
          const xDiff = player.x - x;
          const yDiff = player.y - y;
          if (Math.abs(xDiff) > SIGHT || Math.abs(yDiff) > SIGHT) {
            tileClass += ' dark';
          } else if (Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)) >= SIGHT) {
            tileClass += ' dark';
          }
        }
        /* row.push(React.createElement('span', {
          className: `tile ${tileClass}`,
          key: `${x}x${y}`,
        }, ' '));*/
        row.push(<span
          key={`${x}x${y}`}
          className={`tile ${tileClass}`}
        />);
      }
      /* rows.push(React.createElement('div', {className: 'boardRow', key: 'row' + y}, row)) */
      rows.push(<div key={`row${y}`} className="boardRow">{row}</div>);
    }
    return (<Touch onTouch={this.props.onMove}>
      <div id="board">{rows}</div>
    </Touch>);
  }
}

const { func, object, number } = PropTypes;
Board.propTypes = {
  // getState: React.PropTypes.func.isRequired,
  setWindowSize: func.isRequired,
  resetMap: func.isRequired,
  levelUp: func.isRequired,
  player: object.isRequired,
  level: number.isRequired,
  onMove: func.isRequired,
  onFill: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
