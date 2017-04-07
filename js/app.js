import ROT from 'rot-js';
var CONFIG = {
	// tileSize: 16,
  tileSize: 32,
	// Not really correct/reliable, but detecting touch screen is currently impossible
	touch: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
};

var tileSet = document.createElement("img");
tileSet.src = "assets/tileset.png";

var TILES = {
	empty: {
    tileCoords: [ 0, 0 ],
		walkable: true,
		desc: "Nothing"
	},
	wall: {
    tileCoords: [ 2, 5 ],
		walkable: false,
		desc: "Wall"
	},
  tileSet: tileSet,
  tileArray: []
};

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

var Game = {
    display: null,
    player: null,

    init: function() {
      var w = 10, h = 10;
      var Game = this;
      var dm = new ROT.Map.DividedMaze(w, h);
      // var dm = ROT.Map.Arena(w, h);

      this.display = new ROT.Display({
        width: w,
        height: h,
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
        drawTile(Math.floor(event.x / CONFIG.tileSize) * CONFIG.tileSize, Math.floor(event.y / CONFIG.tileSize) * CONFIG.tileSize, 0, Game);
        // drawTile(0, 0, 0, Game);
        // drawTile(63, 0, 0, Game);
        // drawTile(31, 31, 0, Game);

        // drawTile(150, 26, 1, Game);
        // Game.display.draw(event.x, event.y, 'o', '#ef16cc', '#ef16ff');
        drawMap(Game, CONFIG.tileSize);
      }, true);

      document.body.appendChild(this.display.getContainer());
      // dm.create(display.DEBUG);
      // this._createPlayer(freeCells);
    },

    _createPlayer: function(freeCells) {
        var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
        var key = freeCells.splice(index, 1)[0];
        var parts = key.split(",");
        var x = parseInt(parts[0]);
        var y = parseInt(parts[1]);
        this.player = new Player(x, y);
    }
}

function drawMap (Game, tileSize) { //draw original map
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

var Player = function(x, y) {
    this._x = x;
    this._y = y;
    this._draw();
}

Player.prototype._draw = function() {
    Game.display.draw(this._x, this._y, "@", "#ff0");
}

function getTile(x, y, tileSize) {
  return {
    x: Math.floor(x / tileSize),
    y: Math.floor(y / tileSize),
  };
}

window.onload = Game.init;
