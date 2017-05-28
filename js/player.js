import { TILES } from './configuration.js';
import { draw } from './drawingFunc.js';

class Player {

    constructor(x, y) {
      this._x = x;
      this._y = y;
    }

    move(x, y) {
      this._x = x;
      this._y = y;
      this.draw();
    }

    getPosition() {
      return {
        x: this._x,
        y: this._y
      };
    }

    draw() {
      // TODO Add tile of player
      draw(this._x, this._y, 'wall');
    }
}

export { Player };
