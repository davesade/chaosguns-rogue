import { TILES } from './configuration.js';
import { draw } from './drawingFunc.js';

class Player {

    constructor(x, y) {
      this._x = x;
      this._y = y;
    }

    getPosition() {
      return {
        x: this._x,
        y: this._y
      };
    }

    draw() {
      draw(this._x, this._y, 1);
    }
}

export { Player };
