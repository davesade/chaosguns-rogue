import ROT from 'rot-js';

import { CONFIG, TILES, MAP_WIDTH, MAP_HEIGHT } from './configuration.js';
import { drawMap } from './map.js';
import { player } from './player.js';

export var Game = {
    display: null,
    player: null,

    init: function() {
      var Game = this;

      this.display = new ROT.Display({
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        layout: "tile",
        fontSize: CONFIG.tileSize,
        tileWidth: CONFIG.tileSize,
        tileHeight: CONFIG.tileSize,
    		tileSet: TILES.tileSet
      });

      this.display.getContainer().addEventListener("click", function(event) {
        console.log('event', event.x, event.y);
        console.log('Game.display.eventToPosition', Game.display.eventToPosition(event));
        // var tileCoordinates =  Game.display.eventToPosition(event);
        // var tile = getTile(event.x, event.y, CONFIG.tileSize);

        // drawTile(Math.floor(event.x / CONFIG.tileSize) * CONFIG.tileSize, Math.floor(event.y / CONFIG.tileSize) * CONFIG.tileSize, 0, Game);

        // drawTile(0, 0, 0, Game);
        // drawTile(63, 0, 0, Game);
        // drawTile(31, 31, 0, Game);

        // drawTile(150, 26, 1, Game);
        // Game.display.draw(event.x, event.y, 'o', '#ef16cc', '#ef16ff');
      }, true);

      document.body.appendChild(this.display.getContainer());

      // TODO use something else than timeout
      setTimeout(function() {
        drawMap(Game, CONFIG.tileSize);
      }, 100);
    },
}

// Player.prototype._draw = function() {
//     Game.display.draw(this._x, this._y, "@", "#ff0");
// }

// function getTile(x, y, tileSize) {
//   return {
//     x: Math.floor(x / tileSize),
//     y: Math.floor(y / tileSize),
//   };
// }

window.onload = Game.init;
