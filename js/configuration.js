export const CONFIG = {
	// tileSize: 16,
  tileSize: 32,
	// Not really correct/reliable, but detecting touch screen is currently impossible
	touch: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
};

// TODO refactor this
var tileSet = document.createElement("img");
tileSet.src = "assets/tileset.png";

export const TILES = {
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
