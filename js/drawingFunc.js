import { chaosGuns } from './game.js';
import { TILES } from './configuration.js';

function draw(x, y, tileName) {
  var w = chaosGuns.getDisplay().getOptions().width;
  var h = chaosGuns.getDisplay().getOptions().height;
  var tw = chaosGuns.getDisplay().getOptions().tileWidth;
  var th = chaosGuns.getDisplay().getOptions().tileHeight;

  var tileCoords = TILES[tileName].tileCoords;
  chaosGuns.getDisplay()._context.drawImage(
    chaosGuns.getDisplay()._options.tileSet,
    tileCoords[0], tileCoords[1], tw, th,
    x, y, tw, th
  );
}

export { draw };
