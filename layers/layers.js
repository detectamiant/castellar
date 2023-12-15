var wms_layers = [];

var lyr_Ortofotocolor2023provisional_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_provisional",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto color 2023 (provisional)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolor2023provisional_0, 0]);
var format_PositiusCastellardelValls_1 = new ol.format.GeoJSON();
var features_PositiusCastellardelValls_1 = format_PositiusCastellardelValls_1.readFeatures(json_PositiusCastellardelValls_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusCastellardelValls_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusCastellardelValls_1.addFeatures(features_PositiusCastellardelValls_1);
var lyr_PositiusCastellardelValls_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusCastellardelValls_1, 
                style: style_PositiusCastellardelValls_1,
                interactive: true,
                title: '<img src="styles/legend/PositiusCastellardelValls_1.png" /> Positius Castellar del Vallès'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_Ortofotocolor2023provisional_0,],
                                title: "Mapas de fondo"});

lyr_Ortofotocolor2023provisional_0.setVisible(true);lyr_PositiusCastellardelValls_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_PositiusCastellardelValls_1];
lyr_PositiusCastellardelValls_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_PositiusCastellardelValls_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area': 'Range', });
lyr_PositiusCastellardelValls_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_PositiusCastellardelValls_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});