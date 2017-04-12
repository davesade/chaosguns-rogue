import { CONFIG, TILES } from './configuration.js';

function prepareTiles() {
	for (var i in TILES) {
		var tile = TILES[i];
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
	for (let x = 0; x < 10; x++) {
		drawTile(x * tileSize, 0, 1, Game);
		drawTile(x * tileSize, 9 * tileSize, 1, Game);
	}

	for (let y = 0; y < 10; y++) {
		drawTile(0, y * tileSize, 1, Game);
		drawTile(9 * tileSize, y * tileSize, 1, Game);
	}

	for (let x = 0; x < 10; x++) {
		for (let y = 0; y < 10; y++) {
      if(x === y) {
        drawTile(x * tileSize, y * tileSize, 1, Game);
      }
    }
	}
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
