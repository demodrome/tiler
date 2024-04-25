class Tilemap {
    /**
     * Create the tilemap
     * @param {Object} config The tilemap configuration options
     * @param {Number} config.mapHeight The height of the map, measured in tiles
     * @param {Number} config.mapWidth The width of the map, measured in tiles
     * @param {Number} config.tileDimensions The width and height of each tile in the map
     * @param {String} config.mapName The name of the map
     */
    constructor(config) {
        this.mapWidth = config.mapWidth || 10;
        this.mapHeight = this.mapHeight || 5;
        this.tileDimensions = config.tileDimensions || 16;
        this.mapName = config.mapName || "Untitled";

        // Tilemaps will copntain multiple layers. A base layer will be generated automatically.
        this.layers = [];
    }

    init() {
        // Initiate
    }
}