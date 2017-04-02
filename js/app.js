import ROT from 'rot-js';
var CONFIG = {
	// tileSize: 16,
  tileSize: 26,
	// Not really correct/reliable, but detecting touch screen is currently impossible
	touch: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
};

var Player = function(x, y) {
    this._x = x;
    this._y = y;
    this._draw();
}

Player.prototype._draw = function() {
    Game.display.draw(this._x, this._y, "@", "#ff0");
}

function getTile() {

}

var Game = {
    display: null,
    player: null,

    init: function() {
      var w = 30, h = 30;

      var Game = this;
      var dm = new ROT.Map.DividedMaze(w, h);
      // var dm = ROT.Map.Arena(w, h);

      this.display = new ROT.Display({
        width: w,
        height: h,
        layout: "tile",
        fontSize: CONFIG.tileSize,
        tileWidth: CONFIG.tileSize,
        tileHeight: CONFIG.tileSize
      });

      this.display.getContainer().addEventListener("click", function(event) {
        debugger;
        console.log('event', event);
      }, true);

      document.body.appendChild(this.display.getContainer());
      dm.create(display.DEBUG);
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

window.onload = Game.init;
