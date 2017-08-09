import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Touch from './Touch';
import HealthBar from './HealthBar';
import ToggleTorch from './ToggleTorch';
import { onMove, toggleDarkness, resetMap } from '../actions';
import { tileSize, SIGHT } from '../GameConstants';
import Message from './Message';
import floorTile from '../../styles/sprites/floors.png';

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
  game: state.dungeon,
  occupiedSpaces: state.occupiedSpaces,
  level: state.level,
  darkness: state.darkness,
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  onMove: vector => dispatch(onMove(vector)),
  onToggleDarkness: () => dispatch(toggleDarkness()),
  onResetGame: () => dispatch(resetMap()),
});

class Board extends Component {
  constructor() {
    super();
    this.state = { timers: [] };
    // this.handleKeyUp = this.handleKeyUp.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
    // this.movePlayer = this.movePlayer.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.canvas.width = Math.floor(this.canvas.clientWidth / tileSize) * tileSize;
    this.canvas.height = Math.floor(this.canvas.clientHeight / tileSize) * tileSize;

    this.img = new Image();
    this.img.src = floorTile;
    this.img.onload = () => {
      window.addEventListener('keydown', this.handleKeypress);
      // window.addEventListener('keydown', this.handleKeyDown);
      // window.addEventListener('keyup', this.handleKeyUp);
      window.addEventListener('resize', this.handleResize);
      this.clearAndDraw();
    };
  }
  componentDidUpdate(prevProps) {
    const arr1 = Object.entries(prevProps.occupiedSpaces);
    const arr2 = Object.entries(this.props.occupiedSpaces);
    if (prevProps.darkness !== this.props.darkness || prevProps.level !== this.props.level) {
      this.clearAndDraw();
    } else if (
      prevProps.entities.player.x !== this.props.entities.player.x ||
      prevProps.entities.player.y !== this.props.entities.player.y
    ) {
      this.clearAndDraw();
    } else if (sameArray(arr1, arr2) === false) {
      this.clearAndDraw();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeypress);
    // window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('resize', this.handleResize);
  }
  /*
  clearTimers() {
    this.state.timers.forEach(t => clearInterval(t));
    this.setState({ timers: [] });
  }
  movePlayer(d) {
    this.props.onMove(d);
    const t = setInterval(() => this.props.onMove(d), moveSpeed);
    const timers = this.state.timers.concat(t);
    this.setState({ timers });
  }
  handleKeyUp(event) {
    switch (event.keyCode) {
      case 65:
      case 37:
      case 87:
      case 38:
      case 68:
      case 39:
      case 83:
      case 40: event.preventDefault(); this.clearTimers();
      // no default
    }
  }
  handleKeyDown(event) {
    switch (event.keyCode) {
      case 65:
      case 37: event.preventDefault(); this.movePlayer({ x: -1, y: 0 }); break;
      case 87:
      case 38: event.preventDefault(); this.movePlayer({ x: 0, y: -1 }); break;
      case 68:
      case 39: event.preventDefault(); this.movePlayer({ x: 1, y: 0 }); break;
      case 83:
      case 40: event.preventDefault(); this.movePlayer({ x: 0, y: 1 }); break;
      // no default
    }
  } */
  handleKeypress(event) {
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
  handleResize() {
    this.canvas.width = Math.floor(this.canvas.clientWidth / tileSize) * tileSize;
    this.canvas.height = Math.floor(this.canvas.clientHeight / tileSize) * tileSize;
    this.clearAndDraw();
  }
  clearAndDraw() {
    const ctx = this.canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw();
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

    const ctx = this.canvas.getContext('2d');
    for (let i = startX, dx = 0; i < endX; i += 1, dx += tileSize) {
      for (let ii = startY, dy = 0; ii < endY; ii += 1, dy += tileSize) {
        const str = `${i}x${ii}`;
        const isOccupied = Object.prototype.hasOwnProperty.call(this.props.occupiedSpaces, str);
        const darkX = Math.abs(this.props.entities.player.x - i);
        const darkY = Math.abs(this.props.entities.player.y - ii);
        const darkArea = Math.hypot(darkX, darkY);
        if (this.props.darkness && darkArea >= SIGHT) {
          ctx.fillStyle = 'black';
          ctx.fillRect(dx, dy, tileSize, tileSize);
        } else {
          const { sx, sy, sw, sh } = this.props.game[i][ii];
          ctx.drawImage(this.img, sx, sy, sw, sh, dx, dy, tileSize, tileSize);
        }
        if ((
          isOccupied && this.props.darkness && darkArea < SIGHT
        ) || (
          isOccupied && !this.props.darkness
        )) {
          const en = this.props.occupiedSpaces[str];
          const { sx, sy, sw, sh } = this.props.entities[en].tile;

          ctx.drawImage(this.img, sx, sy, sw, sh, dx, dy, tileSize, tileSize);
        }
      }
    }
    const wpn = this.hudWeapon.getContext('2d');
    const { sx, sy, sw, sh } = this.props.entities.player.weapon.tile;
    wpn.drawImage(this.img, sx, sy, sw, sh, 0, 0, this.hudWeapon.width, this.hudWeapon.height);
  }

  render() {
    /* You'll need to react to prop changes */
    return (<div className="dungeon__container">
      <div className="dungeon__hud">
        <HealthBar health={this.props.entities.player.health} heartValue={20} />
        <canvas
          className="dungeon__weapon"
          ref={(c) => { this.hudWeapon = c; }}
          width="28px"
          height="28px"
        />
        <ToggleTorch
          onToggle={this.props.onToggleDarkness}
          darkness={this.props.darkness}
        />
      </div>

      <Touch onTouch={this.props.onMove}>
        <canvas
          className="dungeon__floor"
          ref={(canvas) => { this.canvas = canvas; }}
          autoFocus
        />
      </Touch>
      <Message text={this.props.message} onClose={this.props.onResetGame} />
    </div>);
  }
}

const { func, object, number, array, bool, string } = PropTypes;
Board.propTypes = {
  entities: object.isRequired,
  game: array.isRequired,
  occupiedSpaces: object.isRequired,
  level: number.isRequired,
  darkness: bool.isRequired,
  onMove: func.isRequired,
  message: string.isRequired,
  onResetGame: func.isRequired,
  onToggleDarkness: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
