var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider : new Cesium.BingMapsImageryProvider({
        url : 'http://dev.virtualearth.net'
    }),
    baseLayerPicker : false,
    animation:false,
     geocoder:false,
     timeline:false,
     sceneModePicker:true,
	 homeButton:false
});

var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
    url : 'https://assets.agi.com/stk-terrain/world',
	//url : 'https://cesiumjs.org/tilesets/terrain/smallterrain',
    requestWaterMask : true,
    requestVertexNormals : true
});

viewer.dataSources.add(Cesium.GeoJsonDataSource.load('./data/vector/world.json', {
        stroke: Cesium.Color.YELLOW,
        fill: Cesium.Color.PINK.withAlpha(0.0),
        strokeWidth: 3
    }));
viewer.dataSources.add(Cesium.GeoJsonDataSource.load('./data/vector/chinashp.json', {
        stroke: Cesium.Color.DARKGRAY,
        fill: Cesium.Color.PINK.withAlpha(0.0),
        strokeWidth: 3
    }));
viewer.dataSources.add(Cesium.KmlDataSource.load('./data/vector/province.kml'));

viewer.terrainProvider = cesiumTerrainProviderMeshes;
viewer.camera.lookAt(Cesium.Cartesian3.fromDegrees(107.969, 30.19), new Cesium.Cartesian3(0.0, 0.0, 20000000.0));
viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
/*
viewer.camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(90.0, 30.0, 100.0, 40.0);

var greenRectangle = viewer.entities.add({
    name : 'Green translucent, rotated, and extruded rectangle at height with outline',
    rectangle : {
        coordinates : Cesium.Rectangle.fromDegrees(90.0, 30.0, 100.0, 40.0),
        material : Cesium.Color.GREEN.withAlpha(0.5),
        rotation : Cesium.Math.toRadians(45),
        extrudedHeight : 300000.0,
        height : 100000.0,
        outline : true,
        outlineColor : Cesium.Color.GREEN
    }
});
*/