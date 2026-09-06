var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Hauteur_deau_5k_20k_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://pgiis.sec.gouv.sn/geoserver/National_Cartes/ows",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hauteur_deau_5k_20k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Hauteur_deau_5k_20k',
                            popuplayertitle: 'Hauteur_deau_5k_20k',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Hauteur_deau_5k_20k_1, 0]);
var lyr_Risques_5k_20k_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://pgiis.sec.gouv.sn/geoserver/National_Cartes/ows",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Risques_5k_20k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Risques_5k_20k',
                            popuplayertitle: 'Risques_5k_20k',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Risques_5k_20k_2, 0]);
var format_Region_kit_Social_Sonatel_3 = new ol.format.GeoJSON();
var features_Region_kit_Social_Sonatel_3 = format_Region_kit_Social_Sonatel_3.readFeatures(json_Region_kit_Social_Sonatel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_kit_Social_Sonatel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_kit_Social_Sonatel_3.addFeatures(features_Region_kit_Social_Sonatel_3);
var lyr_Region_kit_Social_Sonatel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region_kit_Social_Sonatel_3, 
                style: style_Region_kit_Social_Sonatel_3,
                popuplayertitle: 'Region_kit_Social_Sonatel',
                interactive: false,
                title: '<img src="styles/legend/Region_kit_Social_Sonatel_3.png" /> Region_kit_Social_Sonatel'
            });
var format_Commune_kit_Social_Sonatel_4 = new ol.format.GeoJSON();
var features_Commune_kit_Social_Sonatel_4 = format_Commune_kit_Social_Sonatel_4.readFeatures(json_Commune_kit_Social_Sonatel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_kit_Social_Sonatel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_kit_Social_Sonatel_4.addFeatures(features_Commune_kit_Social_Sonatel_4);
var lyr_Commune_kit_Social_Sonatel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_kit_Social_Sonatel_4, 
                style: style_Commune_kit_Social_Sonatel_4,
                popuplayertitle: 'Commune_kit_Social_Sonatel',
                interactive: false,
                title: '<img src="styles/legend/Commune_kit_Social_Sonatel_4.png" /> Commune_kit_Social_Sonatel'
            });
var format_Quartier_kit_Social_Sonatel_5 = new ol.format.GeoJSON();
var features_Quartier_kit_Social_Sonatel_5 = format_Quartier_kit_Social_Sonatel_5.readFeatures(json_Quartier_kit_Social_Sonatel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quartier_kit_Social_Sonatel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartier_kit_Social_Sonatel_5.addFeatures(features_Quartier_kit_Social_Sonatel_5);
var lyr_Quartier_kit_Social_Sonatel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quartier_kit_Social_Sonatel_5, 
                style: style_Quartier_kit_Social_Sonatel_5,
                popuplayertitle: 'Quartier_kit_Social_Sonatel',
                interactive: false,
                title: '<img src="styles/legend/Quartier_kit_Social_Sonatel_5.png" /> Quartier_kit_Social_Sonatel'
            });
var format_Kit_Social_6 = new ol.format.GeoJSON();
var features_Kit_Social_6 = format_Kit_Social_6.readFeatures(json_Kit_Social_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kit_Social_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kit_Social_6.addFeatures(features_Kit_Social_6);
var lyr_Kit_Social_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kit_Social_6, 
                style: style_Kit_Social_6,
                popuplayertitle: 'Kit_Social',
                interactive: true,
                title: '<img src="styles/legend/Kit_Social_6.png" /> Kit_Social'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Hauteur_deau_5k_20k_1.setVisible(true);lyr_Risques_5k_20k_2.setVisible(true);lyr_Region_kit_Social_Sonatel_3.setVisible(true);lyr_Commune_kit_Social_Sonatel_4.setVisible(true);lyr_Quartier_kit_Social_Sonatel_5.setVisible(true);lyr_Kit_Social_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Hauteur_deau_5k_20k_1,lyr_Risques_5k_20k_2,lyr_Region_kit_Social_Sonatel_3,lyr_Commune_kit_Social_Sonatel_4,lyr_Quartier_kit_Social_Sonatel_5,lyr_Kit_Social_6];
lyr_Region_kit_Social_Sonatel_3.set('fieldAliases', {'CODE': 'CODE', 'NOM': 'NOM', 'THEME': 'THEME', 'PAYS': 'PAYS', 'IDUU': 'IDUU', 'SUM_SUPERF': 'SUM_SUPERF', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID': 'OBJECTID', 'POPULATION': 'POPULATION', 'layer': 'layer', 'path': 'path', 'surface': 'surface', 'Densitepop': 'Densitepop', });
lyr_Commune_kit_Social_Sonatel_4.set('fieldAliases', {'REG': 'REG', 'DEPT': 'DEPT', 'CAV': 'CAV', 'CCRCA': 'CCRCA', 'COD_REG': 'COD_REG', 'COD_DEPT': 'COD_DEPT', 'COD_CAV': 'COD_CAV', 'COD_CCRCA': 'COD_CCRCA', 'COD_ENTITE': 'COD_ENTITE', 'SUPERFICIE': 'SUPERFICIE', 'SUP_HA': 'SUP_HA', 'CCRCA_1': 'CCRCA_1', 'Milieu': 'Milieu', 'Masculin': 'Masculin', 'Feminin': 'Feminin', 'TOTAL': 'TOTAL', });
lyr_Quartier_kit_Social_Sonatel_5.set('fieldAliases', {'QRT_VLG_HA': 'QRT_VLG_HA', 'REG': 'REG', 'DEPT': 'DEPT', 'CAV': 'CAV', 'CCRCA': 'CCRCA', 'COD_REG': 'COD_REG', 'COD_DEPT': 'COD_DEPT', 'COD_CAV': 'COD_CAV', 'COD_CCRCA': 'COD_CCRCA', 'COD_ENTITE': 'COD_ENTITE', 'NUM_ZR': 'NUM_ZR', 'COD_SZR': 'COD_SZR', 'Zone_coron': 'Zone_coron', 'pourcentag': 'pourcentag', });
lyr_Kit_Social_6.set('fieldAliases', {'id': 'id', 'Localite': 'Localite', 'Nombre': 'Nombre', 'KIT': 'KIT', });
lyr_Region_kit_Social_Sonatel_3.set('fieldImages', {'CODE': 'TextEdit', 'NOM': 'TextEdit', 'THEME': 'TextEdit', 'PAYS': 'TextEdit', 'IDUU': 'TextEdit', 'SUM_SUPERF': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'POPULATION': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'surface': 'TextEdit', 'Densitepop': 'TextEdit', });
lyr_Commune_kit_Social_Sonatel_4.set('fieldImages', {'REG': 'TextEdit', 'DEPT': 'TextEdit', 'CAV': 'TextEdit', 'CCRCA': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_DEPT': 'TextEdit', 'COD_CAV': 'TextEdit', 'COD_CCRCA': 'TextEdit', 'COD_ENTITE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUP_HA': 'TextEdit', 'CCRCA_1': 'TextEdit', 'Milieu': 'TextEdit', 'Masculin': 'TextEdit', 'Feminin': 'TextEdit', 'TOTAL': 'TextEdit', });
lyr_Quartier_kit_Social_Sonatel_5.set('fieldImages', {'QRT_VLG_HA': 'TextEdit', 'REG': 'TextEdit', 'DEPT': 'TextEdit', 'CAV': 'TextEdit', 'CCRCA': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_DEPT': 'TextEdit', 'COD_CAV': 'TextEdit', 'COD_CCRCA': 'TextEdit', 'COD_ENTITE': 'TextEdit', 'NUM_ZR': 'TextEdit', 'COD_SZR': 'TextEdit', 'Zone_coron': 'TextEdit', 'pourcentag': 'TextEdit', });
lyr_Kit_Social_6.set('fieldImages', {'id': 'TextEdit', 'Localite': 'TextEdit', 'Nombre': 'TextEdit', 'KIT': 'TextEdit', });
lyr_Region_kit_Social_Sonatel_3.set('fieldLabels', {'CODE': 'no label', 'NOM': 'no label', 'THEME': 'no label', 'PAYS': 'no label', 'IDUU': 'no label', 'SUM_SUPERF': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBJECTID': 'no label', 'POPULATION': 'no label', 'layer': 'no label', 'path': 'no label', 'surface': 'no label', 'Densitepop': 'no label', });
lyr_Commune_kit_Social_Sonatel_4.set('fieldLabels', {'REG': 'no label', 'DEPT': 'no label', 'CAV': 'no label', 'CCRCA': 'no label', 'COD_REG': 'no label', 'COD_DEPT': 'no label', 'COD_CAV': 'no label', 'COD_CCRCA': 'no label', 'COD_ENTITE': 'no label', 'SUPERFICIE': 'no label', 'SUP_HA': 'no label', 'CCRCA_1': 'no label', 'Milieu': 'no label', 'Masculin': 'no label', 'Feminin': 'no label', 'TOTAL': 'no label', });
lyr_Quartier_kit_Social_Sonatel_5.set('fieldLabels', {'QRT_VLG_HA': 'no label', 'REG': 'no label', 'DEPT': 'no label', 'CAV': 'no label', 'CCRCA': 'no label', 'COD_REG': 'no label', 'COD_DEPT': 'no label', 'COD_CAV': 'no label', 'COD_CCRCA': 'no label', 'COD_ENTITE': 'no label', 'NUM_ZR': 'no label', 'COD_SZR': 'no label', 'Zone_coron': 'no label', 'pourcentag': 'no label', });
lyr_Kit_Social_6.set('fieldLabels', {'id': 'inline label - visible with data', 'Localite': 'no label', 'Nombre': 'no label', 'KIT': 'no label', });
lyr_Kit_Social_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});