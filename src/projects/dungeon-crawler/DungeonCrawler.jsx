import React, { PureComponent } from 'react';
import { func, object, array, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { tileSize, SIGHT, tileType } from './GameConstants';
import floorTile from './styles/sprites/floors.png';
import HealthBar from './components/HealthBar';
import ToggleTorch from './components/ToggleTorch';
import Weapon from './components/Weapon';
import DungeonFloor from './components/DungeonFloor';
import Message from './components/Message';
import { move, toggleDarkness, resetMap, pickUpItem, exitStage, battle } from './actions';

const mapStateToProps = ({ dungeonCrawler: { entities, dungeon, occupiedSpaces, darkness, message, map, ready } }) => ({ entities, dungeon, occupiedSpaces, darkness, message, map, ready });

const mapDispatchToProps = dispatch => ({
  onToggleDarkness: () => dispatch(toggleDarkness()),
  onResetGame: () => dispatch(resetMap()),
  onMove: (...args) => dispatch(move(...args)),
  fight: payload => dispatch(battle(payload)),
  onExitStage: () => dispatch(exitStage()),
  onPickUpItem: payload => dispatch(pickUpItem(payload)),
});

class DungeonCrawler extends PureComponent {
  constructor() {
    super();
    this._handleMove = this._handleMove.bind(this);
  }
  componentDidMount() { this.props.onResetGame(); }
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
    const { classnames } = this.context;
    return (<div className={classnames('dungeon')}>
      {this.props.ready && (<div className={classnames('dungeon__container')}>
        <div className={classnames('dungeon__hud')}>
          <HealthBar health={this.props.entities.player.health} heartValue={20} />
          <ToggleTorch onClick={this.props.onToggleDarkness} value={this.props.darkness} />
          <Weapon src={floorTile} {...this.props.entities.player.weapon.tile} />
        </div>

        <DungeonFloor
          src={floorTile}
          onMove={this._handleMove}
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
  // Adding thunks
  onExitStage: func.isRequired,
  onPickUpItem: func.isRequired,
  fight: func.isRequired,
};

DungeonCrawler.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(DungeonCrawler);
