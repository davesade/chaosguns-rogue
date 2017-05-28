import { CONFIG, TILES, MAP_WIDTH, MAP_HEIGHT } from './configuration.js';
import { getTextMap } from './fileLoader.js';

function prepareTiles() {
	for (let i in TILES) {
		let tile = TILES[i];
		if (!tile.tileCoords) continue;
		tile.id = i;
		// tile.ch = TILES.tileArray.length;
		tile.tileCoords[0] *= CONFIG.tileSize;
		tile.tileCoords[1] *= CONFIG.tileSize;
		TILES.tileArray.push(tile);
	}
}
prepareTiles();

export function drawMap (Game, tileSize) { //draw original map
	getTextMap().then(function(map) {
			map = map.replace(/[^a-zA-Z0-9]/g, '');

		for (let x = 0; x < MAP_WIDTH; x++) {
			for (let y = 0; y < MAP_HEIGHT; y++) {
				console.log(x, y, x * MAP_WIDTH + y, map.charAt(x * MAP_WIDTH + y))
	      if(map.charAt(x * MAP_WIDTH + y) === 'a') {
	        drawTile(x * CONFIG.tileSize, y * CONFIG.tileSize, 1, Game);
	      }
	    }
		}
	});
	// for (let x = 0; x < 10; x++) {
	// 	drawTile(x * tileSize, 0, 1, Game);
	// 	drawTile(x * tileSize, 9 * tileSize, 1, Game);
	// }
	//
	// for (let y = 0; y < 10; y++) {
	// 	drawTile(0, y * tileSize, 1, Game);
	// 	drawTile(9 * tileSize, y * tileSize, 1, Game);
	// }


	}

function drawTile(x, y, ch, Game) {
  // TODO move this
  var w = display.getOptions().width;
  var h = display.getOptions().height;
  var tw = display.getOptions().tileWidth;
  var th = display.getOptions().tileHeight;

  var tileCoords = TILES.tileArray[ch].tileCoords;
  Game.display._context.drawImage(
    display._options.tileSet,
    tileCoords[0], tileCoords[1], tw, th,
    x, y, tw, th
  );
}
