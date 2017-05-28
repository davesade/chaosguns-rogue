import { CONFIG, TILES, MAP_WIDTH, MAP_HEIGHT } from './configuration.js';
import { getTextMap } from './fileLoader.js';
import { draw } from './drawingFunc.js';

class Map {
	constructor() {
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

	drawMap() {
		getTextMap().then(function(map) {
			map = map.replace(/[^a-zA-Z0-9]/g, '');

			for (let x = 0; x < MAP_WIDTH; x++) {
				for (let y = 0; y < MAP_HEIGHT; y++) {
		      if(map.charAt(x * MAP_WIDTH + y) === 'a') {
		        draw(x * CONFIG.tileSize, y * CONFIG.tileSize, 1);
		      }
		    }
			}
		});
	}
}

export { Map };
