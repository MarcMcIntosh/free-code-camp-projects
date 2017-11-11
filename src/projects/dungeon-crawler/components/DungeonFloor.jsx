import React, { PureComponent } from 'react';
import { func, array, string, number, object, bool } from 'prop-types';
import Hammer from 'react-hammerjs';
import { extentOf } from '../utils';

/* renders canvas and handleds movement */

class DungeonFloor extends PureComponent {
  constructor() {
    super();
    this._handleSwipe = this._handleSwipe.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this._move = this._move.bind(this);
    this.draw = this.draw.bind(this);
  }
  componentDidMount() {
    this.img = new Image();
    this.img.src = this.props.src;
    this.img.onload = () => {
      window.addEventListener('keydown', this._handleKeyPress);
      window.addEventListener('resize', this._handleResize);
      this._handleResize();
    };
  }

  componentDidUpdate() { this.draw(); }
  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeypress);
    window.removeEventListener('resize', this._handleResize);
  }
  _move(v) {
    const x = this.props.entities.player.x + (v[0] || 0);
    const y = this.props.entities.player.y + (v[1] || 0);
    this.props.onMove({ x, y });
  }
  _handleSwipe(event) {
    const vel = Math.abs(event.overallVelocity);
    const y = (event.angle <= 100 && event.angle >= 80 && 1) || (event.angle <= -80 && event.angle >= -100 && -1) || 0;
    const x = (event.angle >= -10 && event.angle <= 10 && 1) || (event.angle > 80 && event.angle < 100 && -1) || 0;
    // return vel >= 0.75 && this._move({ x, y });
    return vel >= 0.75 && this._move([x, y]);
  }
  _handleKeyPress(event) {
    switch (event.keyCode) {
      case 65: case 37: event.preventDefault(); return this._move([-1, 0]);

      case 87: case 38: event.preventDefault(); return this._move([0, -1]);

      case 68: case 39: event.preventDefault(); return this._move([1, 0]);

      case 83: case 40: event.preventDefault(); return this._move([0, 1]);

      default: return void 0;
    }
  }
  _handleResize() {
    const w = this.canvas.clientWidth;
    const h = w * (3 / 4);
    this.canvas.width = Math.floor(w / this.props.tileSize) * this.props.tileSize;
    this.canvas.height = Math.floor(h / this.props.tileSize) * this.props.tileSize;
    this.draw();
  }
  draw() {
    const { entities, game, darkness, occupiedSpaces, sight } = this.props;
    const tileSize = this.props.tileSize * (3 / 4);
    const { width, height } = this.canvas;
    const cols = Math.floor(width / tileSize);
    const rows = Math.floor(height / tileSize);
    const [startX, endX] = extentOf(game.length, cols, entities.player.x);
    const [startY, endY] = extentOf(game[0].length, rows, entities.player.y);

    /* init canvas api */
    const ctx = this.canvas.getContext('2d');
    /* clear previouse if exists */
    if (ctx) { ctx.clearRect(0, 0, width, height); }

    for (let i = startX, dx = 0; i < endX; i += 1, dx += tileSize) {
      for (let ii = startY, dy = 0; ii < endY; ii += 1, dy += tileSize) {
        const str = `${i}x${ii}`;
        const isOccupied = Object.prototype.hasOwnProperty.call(occupiedSpaces, str);
        const darkX = Math.abs(entities.player.x - i);
        const darkY = Math.abs(entities.player.y - ii);
        const darkArea = Math.hypot(darkX, darkY);
        const isBlack = darkness && darkArea >= sight;
        if (isBlack) {
          ctx.fillStyle = 'black';
          ctx.fillRect(dx, dy, tileSize, tileSize);
        } else {
          const { sx, sy, sw, sh } = game[i][ii];
          ctx.drawImage(this.img, sx, sy, sw, sh, dx, dy, tileSize, tileSize);
        }
        if (isOccupied && !isBlack) {
          const en = occupiedSpaces[str];
          const { sx, sy, sw, sh } = entities[en].tile;
          ctx.drawImage(this.img, sx, sy, sw, sh, dx, dy, tileSize, tileSize);
        }
      }
    }
  }
  render() {
    return (<Hammer onSwipe={this._handleSwipe}>
      <canvas
        className={this.context.classnames('dungeon__floor')}
        ref={(c) => { this.canvas = c; }}
      />
    </Hammer>);
  }
}

DungeonFloor.propTypes = {
  src: string.isRequired,
  tileSize: number.isRequired,
  entities: object.isRequired,
  game: array.isRequired,
  occupiedSpaces: object.isRequired,
  darkness: bool.isRequired,
  sight: number.isRequired,
  onMove: func.isRequired,
};

DungeonFloor.contextTypes = { classnames: func.isRequired };

export default DungeonFloor;
