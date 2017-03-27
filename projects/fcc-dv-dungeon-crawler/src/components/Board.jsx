import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Touch from './Touch';
import setWindowSize from '../actions/Window';
import { resetMap, fillMap } from '../actions/Map';
import { levelUp } from '../actions/Entities';
import onMove from '../actions/Move';
// import DungeonLevel from './DungeonLevel';
import { PLAYER, tileSize, tileColors, SIGHT, reverseLookup } from '../utility/GameConstants';

function startOffset(pos, size) {
  const offset = Math.floor(pos - size);
  return (offset < 0) ? 0 : offset;
}

function sameArray(arr1, arr2) {
  if (!arr1 || !arr2) {
    return false;
  } else if (arr1 instanceof Array === false || arr2 instanceof Array === false) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
      return sameArray(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const mapStateToProps = state => ({
  entities: state.entities,
  game: state.map,
  occupiedSpaces: state.occupiedSpaces,
  level: state.level,
  windowHeight: state.windowHeight,
  windowWidth: state.windowWidth,
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
    // this._handleSwipe = this._handleSwipe.bind(this);
    this.resize = () => {
      this.canvas.width = Math.floor(this.canvas.clientWidth / tileSize) * tileSize;
      this.canvas.height = Math.floor(this.canvas.clientHeight / tileSize) * tileSize;
      this.clearAndDraw();
    };
  }
  componentDidMount() {
    this.props.resetMap();
    this.props.onFill();
    if (this.props.entities.player.toNextLevel <= 0) {
      this._playerLeveledUp();
    }
    window.addEventListener('keydown', this._handleKeypress);
    window.addEventListener('resize', this.resize);
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    /* Might not be needed */
    /* Check offsets */
    this.clearAndDraw();
  }
  componentDidUpdate(prevProps) {
    const arr1 = Object.entries(prevProps.occupiedSpaces);
    const arr2 = Object.entries(this.props.occupiedSpaces);
    if (prevProps.darkness !== this.props.darkness) {
      this.clearAndDraw();
    } else if (
      prevProps.entities.player.x !== this.props.entities.player.x ||
      prevProps.entities.player.y !== this.props.entities.player.y
    ) {
      // console.log('player moved');
      this.clearAndDraw();
    } else if (sameArray(arr1, arr2) === false) {
      this.clearAndDraw();
      console.log('occupiedSpaces ar diffrent');
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeypress);
    window.removeEventListener('resize', this.resize);
  }
  clearAndDraw() {
    const ctx = this.canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw();
    }
  }

  _playerLeveledUp() {
    const currLevel = this.props.entities.player.level + 1;
    const attack = currLevel * PLAYER.attack;
    const health = currLevel * PLAYER.health;
    const toNext = (currLevel + 1) * PLAYER.toNextLevel;
    this.props.levelUp(attack, health, toNext);
  }
  _handleKeypress(event) {
    switch (event.keyCode) {
      case 65:
      case 37: event.preventDefault(); this.props.onMove({ x: -1, y: 0 }); break;
      case 87:
      case 38: event.preventDefault(); this.props.onMove({ x: 0, y: -1 }); break;
      case 68:
      case 39: event.preventDefault(); this.props.onMove({ x: 1, y: 0 }); break;
      case 83:
      case 40: event.preventDefault(); this.props.onMove({ x: 0, y: 1 }); break;
      // no default
    }
  }
  draw() {
    // const { width, height } = this.canvas;
    // const maxTilesX = Math.floor(this.canvas.width / tileSize);
    // const maxTilesY = Math.floor(this.canvas.height / tileSize);
    const cols = this.canvas.width / tileSize;
    const rows = this.canvas.height / tileSize;
    /*
    const maxGameX = this.props.game.length * tileSize;
    const maxGameY = this.props.game[0].length * tileSize;
    const screenAdjustX = (cols > this.props.game.length) ? cols - this.props.game.length : 0;
    const screenAdjustY = (rows > this.props.game[0].length) ? rows - this.props.game[0].length : 0;
    */
    /* These offset calculations need imporvment as the game occasionaly renders of screen */
    /* Calculate X offsets */
    let x = startOffset(this.props.entities.player.x, cols);
    let x1 = x + cols;
    if (x1 > this.props.game.length) {
      x = (cols > this.props.game.length) ? 0 : x - (x1 - this.props.game.length);
      x1 = this.props.game.length;
    }

    /* Calculate Y offsets */
    let y = startOffset(this.props.entities.player.y, rows);
    let y1 = y + rows;
    if (y1 > this.props.game[0].length) {
      y = (rows > this.props.game[0].length) ? 0 : y - (y1 - this.props.game[0].length);
      y1 = this.props.game[0].length;
    }

    const ctx = this.canvas.getContext('2d');
    /* Replace this */
    if (this.props.darkness) {
      /* Darken Every thing */
      ctx.fillStyle = tileColors.dark;

      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      const ldx = (
        this.props.entities.player.x - SIGHT < x
      ) ? x - this.props.entities.player.x : this.props.entities.player.x - SIGHT;

      const ldx1 = (
        this.props.entities.player.x + SIGHT > x1
      ) ? x1 - this.props.entities.player.x : this.props.entities.player.x + SIGHT;

      const ldy = (
        this.props.entities.player.y - SIGHT < y
      ) ? y - this.props.entities.player.y : this.props.entities.player.y - SIGHT;

      const ldy1 = (
        this.props.entities.player.y + SIGHT > y1
      ) ? y1 - this.props.entities.player.y : this.props.entities.player.y + SIGHT;

      for (let i = ldx; i < ldx1; i += 1) {
        for (let ii = ldy; ii < ldy1; ii += 1) {
          const e = this.props.occupiedSpaces[`${i}x${ii}`];
          const n = this.props.game[i][ii];
          const t = (!e) ? reverseLookup[n] : this.props.entities[e].entityType;
          const xr = i * tileSize;
          const yr = ii * tileSize;
          ctx.clearRect(xr, yr, tileSize, tileSize);
          ctx.fillStyle = tileColors[t];
          ctx.fillRect(xr, yr, tileSize, tileSize);
        }
      }
    } else {
      for (let i = x; i < x1; i += 1) {
        // console.log(x);
        for (let ii = y; ii < y1; ii += 1) {
          const e = this.props.occupiedSpaces[`${i}x${ii}`];
          const n = this.props.game[i][ii];
          const t = (!e) ? reverseLookup[n] : this.props.entities[e].entityType;
          ctx.fillStyle = tileColors[t];
          ctx.fillRect(i * tileSize, ii * tileSize, tileSize, tileSize);
        }
      }
    }
  }
  render() {
    /* You'll need to react to prop changes */
    return (<div className="dungeon__container">
      <Touch onTouch={this.props.onMove}>
        <canvas
          className="dungeon__floor"
          ref={(canvas) => { this.canvas = canvas; }}
        />
      </Touch>
    </div>);
  }
}

const { func, object, number, array, bool } = PropTypes;
Board.propTypes = {
  // getState: React.PropTypes.func.isRequired,
  // player: object.isRequired,
  entities: object.isRequired,
  game: array.isRequired,
  occupiedSpaces: object.isRequired,
  level: number.isRequired,
//  windowHeight: number.isRequired,
//  windowWidth: number.isRequired,
  darkness: bool.isRequired,
//  setWindowSize: func.isRequired,
  resetMap: func.isRequired,
  levelUp: func.isRequired,
  onMove: func.isRequired,
  onFill: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
