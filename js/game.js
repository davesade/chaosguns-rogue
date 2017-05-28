import ROT from 'rot-js';

import { CONFIG, TILES, MAP_WIDTH, MAP_HEIGHT } from './configuration.js';
import { drawMap } from './map.js';
import { Player } from './player.js';

var chaosGuns;

class Game {
  constructor() {
    var gameInstance = this;

    // init map
    this._display = new ROT.Display({
      width: MAP_WIDTH,
      height: MAP_HEIGHT,
      layout: "tile",
      fontSize: CONFIG.tileSize,
      tileWidth: CONFIG.tileSize,
      tileHeight: CONFIG.tileSize,
      tileSet: TILES.tileSet
    });

    // init player
    this._player = new Player(4, 5);

    // register click
    this._display.getContainer().addEventListener("click", function(event) {
      console.log('event', event.x, event.y);
      console.log('Game.display.eventToPosition', gameInstance._display.eventToPosition(event));
    }, true);

    // append map to the DOM
    document.body.appendChild(gameInstance._display.getContainer());

    // TODO use something else than timeout
    setTimeout(function() {
      drawMap(CONFIG.tileSize);
      gameInstance._player.draw();
    }, 1000);
  }

  getDisplay() {
    return this._display;
  }
}

window.onload = function() {
  chaosGuns = new Game();
}

export { chaosGuns };
