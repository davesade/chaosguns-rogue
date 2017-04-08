

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
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
      if(i === j) {
        drawTile(i * tileSize, j * tileSize, 1, Game);
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
  debugger;
  Game.display._context.drawImage(
    display._options.tileSet,
    tileCoords[0], tileCoords[1], tw, th,
    x, y, tw, th
  );
}
