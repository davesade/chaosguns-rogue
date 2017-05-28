export const CONFIG = {
	// tileSize: 16,
  tileSize: 16,
	// Not really correct/reliable, but detecting touch screen is currently impossible
	touch: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
};

export const MAP_WIDTH = 10;
export const MAP_HEIGHT = 10;

// TODO refactor this
var tileSet = document.createElement("img");
tileSet.src = "../assets/pap_tileset.gif";

export const TILES = {
	empty: {
    tileCoords: [ 0, 0 ],
		walkable: true,
    bulletProof: false,
		desc: "Nothing"
	},
  floor: {
    tileCoords: [ 4, 0 ],
		walkable: true,
    bulletProof: false,
		desc: "Floor"
	},
	wall: {
    tileCoords: [ 0, 10 ],
		walkable: false,
    bulletProof: true,
		desc: "Wall"
	},
  tileSet: tileSet,
  tileArray: []
};
