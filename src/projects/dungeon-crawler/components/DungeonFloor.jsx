import React, { PureComponent } from 'react';
import { func, array, string, number, object, bool } from 'prop-types';
import { extentOf } from '../utils';

function whichKey(code) {
  // LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40,
  switch (code) {
    case 65: case 37: return 'left';
    case 87: case 38: return 'up';
    case 68: case 39: return 'right';
    case 83: case 40: return 'down';
    default: return '';
  }
}

class DungeonFloor extends PureComponent {
  constructor(props) {
    super(props);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
    this.draw = this.draw.bind(this);
    this.refCallback = this.refCallback.bind(this);
  }
  componentDidMount() {
    this.img = new Image();
    this.img.src = this.props.src;
    this.img.onload = () => {
      window.addEventListener('keydown', this._handleKeyPress);
      window.addEventListener('resize', this._handleResize);
      window.addEventListener('keyup', this._handleKeyUp);
      this._handleResize();
    };
  }
  componentDidUpdate() { this.draw(); }
  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeypress);
    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('keyup', this._handleKeyUp);
  }
  refCallback(elem) { this.canvas = elem; }
  _handleKeyPress(event) {
    const str = whichKey(event.keyCode);
    if (str) { event.preventDefault(); this.props.onPress(str); }
  }
  _handleKeyUp(event) {
    const str = whichKey(event.keyCode);
    if (str) { event.preventDefault(); this.props.onPress(''); }
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
    return (<canvas ref={this.refCallback} className={this.context.classnames('dungeon__floor')} />);
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
  onPress: func.isRequired,
};

DungeonFloor.contextTypes = { classnames: func.isRequired };

export default DungeonFloor;
