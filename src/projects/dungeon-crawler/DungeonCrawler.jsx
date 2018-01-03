import React, { Component } from 'react';
import { func, object, array, bool, string, number } from 'prop-types';
import { connect } from 'react-redux';
import classnames from './styles';
import { tileSize, SIGHT, tileType } from './GameConstants';
import floorTile from './styles/sprites/floors.png';
import HealthBar from './components/HealthBar';
import ToggleTorch from './components/ToggleTorch';
import Weapon from './components/Weapon';
import DungeonFloor from './components/DungeonFloor';
import Message from './components/Message';
import Dpad from './components/Dpad';
import { move, toggleDarkness, resetMap, pickUpItem, exitStage, battle, onPress } from './actions';

const mapStateToProps = ({ dungeonCrawler: { pressing, entities, dungeon, occupiedSpaces, darkness, message, map, ready } }) => ({ pressing, entities, dungeon, occupiedSpaces, darkness, message, map, ready });

const mapDispatchToProps = dispatch => ({
  onToggleDarkness: () => dispatch(toggleDarkness()),
  onResetGame: () => dispatch(resetMap()),
  onMove: (...args) => dispatch(move(...args)),
  fight: payload => dispatch(battle(payload)),
  onExitStage: () => dispatch(exitStage()),
  onPickUpItem: payload => dispatch(pickUpItem(payload)),
  onPress: n => dispatch(onPress(n)),
});

class DungeonCrawler extends Component {
  constructor() {
    super();
    this._handleMove = this._handleMove.bind(this);
    this.classnames = classnames;
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.goIn = this.goIn.bind(this);
  }
  getChildContext() { return { classnames: this.classnames }; }
  componentDidMount() { this.props.onResetGame(); }
  onMouseUp() {
    clearTimeout(this.props.pressing);
    this.props.onPress(0);
  }
  onMouseDown(value) {
    const t = setInterval(() => { this.goIn(value); }, 100);
    this.props.onPress(t);
  }
  goIn(direction) {
    switch (direction) {
      case 'left': return this._move([-1, 0]);
      case 'right': return this._move([1, 0]);
      case 'up': return this._move([0, -1]);
      case 'down': return this._move([0, 1]);
      default: return void 0;
    }
  }
  _move(v) {
    const x = this.props.entities.player.x + (v[0] || 0);
    const y = this.props.entities.player.y + (v[1] || 0);
    this._handleMove({ x, y });
  }
  _handleMove(v) {
    const { occupiedSpaces, map, entities: { player, ...entities } } = this.props;

    const entityName = occupiedSpaces[`${v.x}x${v.y}`];
    /* Is the tile an empty floor tile  or wall */
    if (!entityName) {
      const isFloor = (map[v.x][v.y] === tileType.FLOOR);
      const x = (isFloor) ? v.x : player.x;
      const y = (isFloor) ? v.y : player.y;
      return this.props.onMove('player', { x, y });
    }
    /* tile is not empty determine collision */
    const entity = entities[entityName];

    switch (entity.entityType) {
      case 'weapon': case 'health': return this.props.onPickUpItem({ ...entity, vector: v });
      case 'exit': return this.props.onExitStage();
      case 'boss': case 'enemy': this.props.fight({ player, entity }); // falls through
      default: return this._handleMove({ x: player.x - (v.x - player.x), y: player.y - (v.y - player.y) });
      // default: return void 0;
    }
    // default: return this._handleMove({ x: player.x - (v.x - player.x), y: player.y - (v.y - player.y) });
  }
  render() {
    /* You'll need to react to prop changes */
    return (<div className={this.classnames('dungeon')}>
      {this.props.ready && (<div className={this.classnames('dungeon__container')}>
        <div className={this.classnames('dungeon__hud')}>
          <HealthBar health={this.props.entities.player.health} heartValue={20} />
          <ToggleTorch onClick={this.props.onToggleDarkness} value={this.props.darkness} />
          <Weapon src={floorTile} {...this.props.entities.player.weapon.tile} />
        </div>

        <Dpad onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} />

        <DungeonFloor
          src={floorTile}
          onPress={this.goIn}
          tileSize={tileSize}
          sight={SIGHT}
          entities={this.props.entities}
          game={this.props.dungeon}
          occupiedSpaces={this.props.occupiedSpaces}
          darkness={this.props.darkness}
        />
      </div>)}
      <Message onClick={this.props.onResetGame}>{this.props.message}</Message>
    </div>);
  }
}

DungeonCrawler.propTypes = {
  ready: bool.isRequired,
  entities: object.isRequired,
  dungeon: array.isRequired,
  occupiedSpaces: object.isRequired,
  darkness: bool.isRequired,
  onMove: func.isRequired,
  message: string.isRequired,
  onResetGame: func.isRequired,
  onToggleDarkness: func.isRequired,
  map: array.isRequired,
  onExitStage: func.isRequired,
  onPickUpItem: func.isRequired,
  fight: func.isRequired,
  pressing: number.isRequired,
  onPress: func.isRequired,
};

DungeonCrawler.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(DungeonCrawler);
