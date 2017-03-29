import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Touch from './Touch';
import setWindowSize from '../actions/Window';
import { resetMap, fillMap } from '../actions/Map';
import { levelUp } from '../actions/Entities';
import onMove from '../actions/Move';
// import DungeonLevel from './DungeonLevel';
import { PLAYER, tileSize, tileColors, SIGHT, reverseLookup } from '../utility/GameConstants';

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
    this.canvas.width = Math.floor(this.canvas.clientWidth / tileSize) * tileSize;
    this.canvas.height = Math.floor(this.canvas.clientHeight / tileSize) * tileSize;
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
      // console.log('occupiedSpaces ar diffrent');
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
    const cols = (this.canvas.width / tileSize);
    const rows = (this.canvas.height / tileSize);

    let startX = Math.floor(this.props.entities.player.x - (cols / 2));
    if (startX < 0) startX = 0;
    let endX = startX + cols;
    if (endX > this.props.game.length) {
      startX = (cols > this.props.game.length) ? 0 : startX - (endX - this.props.game.length);
      endX = this.props.game.length;
    }

    let startY = Math.floor(this.props.entities.player.y - (rows / 2));
    if (startY < 0) startY = 0;
    let endY = startY + rows;
    if (endY > this.props.game[0].length) {
      startY = (rows > this.props.game[0].length) ? 0 : startY - (endY - this.props.game[0].length);
      endY = this.props.game[0].length;
    }

    const gd = [];
    for (let i = startX, x = 0; i < endX; i += 1, x += 1) {
      gd[x] = [];
      for (let ii = startY, y = 0; ii < endY; ii += 1, y += 1) {
        const str = `${i}x${ii}`;
        const xd = Math.abs(this.props.entities.player.x - i);
        const yd = Math.abs(this.props.entities.player.y - ii);
        const xdyd = Math.sqrt((xd * xd) + (yd * yd));
        if (this.props.darkness && xdyd >= SIGHT) {
          gd[x][y] = tileColors.dark;
        } else if (
          Object.prototype.hasOwnProperty.call(this.props.occupiedSpaces, str)
        ) {
          const entityName = this.props.occupiedSpaces[str];
          const { entityType } = this.props.entities[entityName];
          gd[x][y] = tileColors[entityType];
        } else {
          const n = this.props.game[i][ii];
          const t = reverseLookup[n];
          gd[x][y] = tileColors[t];
        }
      }
    }
    const ctx = this.canvas.getContext('2d');
    gd.forEach((x, i) => x.forEach((y, ii) => {
      ctx.fillStyle = y;
      ctx.fillRect(i * tileSize, ii * tileSize, tileSize, tileSize);
    }));
  }
  render() {
    /* You'll need to react to prop changes */
    return (<div className="dungeon__container">
      <Touch onTouch={this.props.onMove}>
        <canvas
          className="dungeon__floor"
          ref={(canvas) => { this.canvas = canvas; }}
          autoFocus
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
