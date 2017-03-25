import React, { PropTypes, Component } from 'react';
import { reverseLookup, tileType } from '../utility/GameConstants';

class DungeonFloor extends Component {
  componentDidMount() { this.draw(); }
  componentDidUpdate() { this.draw(); }
  draw() {
    const ctx = this.canvas.getContext('2d');
    for (let x = 0; x < this.props.game.length; x += 1) {
      for (let y = 0; y < this.props.game[x].length; y += 1) {
        const cell = this.props.game[x][y];
        ctx.fillStyle = (reverseLookup[cell] === tileType.WALL) ? 'grey' : 'white';
        ctx.fillRect(x, y, this.props.tileSize, this.props.tileSize);
      }
    }
  }
  render() {
    return (<canvas
      width={this.props.game.length * this.props.tileSize}
      height={this.props.game[0].length * this.props.tileSize}
      className={this.props.className}
      ref={(canvas) => { this.canvas = canvas; }}
    >Failed to render</canvas>);
  }
}

DungeonFloor.propTypes = {
  game: PropTypes.array.isRequired,
  tileSize: PropTypes.number.isRequired,
  className: PropTypes.string,
};

DungeonFloor.defaultProps = {
  className: 'dungeon__floor',
};

export default DungeonFloor;
