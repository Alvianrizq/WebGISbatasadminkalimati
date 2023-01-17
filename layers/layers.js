var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_satelite_1 = new ol.layer.Tile({
            'title': 'satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Admin_Kab_Tegal_2 = new ol.format.GeoJSON();
var features_Admin_Kab_Tegal_2 = format_Admin_Kab_Tegal_2.readFeatures(json_Admin_Kab_Tegal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin_Kab_Tegal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Kab_Tegal_2.addFeatures(features_Admin_Kab_Tegal_2);
var lyr_Admin_Kab_Tegal_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Admin_Kab_Tegal_2, 
                style: style_Admin_Kab_Tegal_2,
                interactive: true,
    title: 'Admin_Kab_Tegal<br />\
    <img src="styles/legend/Admin_Kab_Tegal_2_0.png" /> Kalimati<br />\
    <img src="styles/legend/Admin_Kab_Tegal_2_1.png" /> <br />'
        });
var format_batas_kec_kab_tegal_3 = new ol.format.GeoJSON();
var features_batas_kec_kab_tegal_3 = format_batas_kec_kab_tegal_3.readFeatures(json_batas_kec_kab_tegal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_kec_kab_tegal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_kec_kab_tegal_3.addFeatures(features_batas_kec_kab_tegal_3);
var lyr_batas_kec_kab_tegal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_kec_kab_tegal_3, 
                style: style_batas_kec_kab_tegal_3,
                interactive: true,
                title: '<img src="styles/legend/batas_kec_kab_tegal_3.png" /> batas_kec_kab_tegal'
            });
var format_SungaiKabTegal_4 = new ol.format.GeoJSON();
var features_SungaiKabTegal_4 = format_SungaiKabTegal_4.readFeatures(json_SungaiKabTegal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiKabTegal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiKabTegal_4.addFeatures(features_SungaiKabTegal_4);
var lyr_SungaiKabTegal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SungaiKabTegal_4, 
                style: style_SungaiKabTegal_4,
                interactive: false,
                title: '<img src="styles/legend/SungaiKabTegal_4.png" /> Sungai Kab Tegal'
            });
var format_JalanLokal_5 = new ol.format.GeoJSON();
var features_JalanLokal_5 = format_JalanLokal_5.readFeatures(json_JalanLokal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_5.addFeatures(features_JalanLokal_5);
var lyr_JalanLokal_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanLokal_5, 
                style: style_JalanLokal_5,
                interactive: true,
                title: '<img src="styles/legend/JalanLokal_5.png" /> Jalan Lokal'
            });
var format_BatasAdminKecamatan_6 = new ol.format.GeoJSON();
var features_BatasAdminKecamatan_6 = format_BatasAdminKecamatan_6.readFeatures(json_BatasAdminKecamatan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdminKecamatan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdminKecamatan_6.addFeatures(features_BatasAdminKecamatan_6);
var lyr_BatasAdminKecamatan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdminKecamatan_6, 
                style: style_BatasAdminKecamatan_6,
                interactive: true,
                title: '<img src="styles/legend/BatasAdminKecamatan_6.png" /> Batas Admin Kecamatan'
            });
var format_BatasAdminKabupaten_7 = new ol.format.GeoJSON();
var features_BatasAdminKabupaten_7 = format_BatasAdminKabupaten_7.readFeatures(json_BatasAdminKabupaten_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdminKabupaten_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdminKabupaten_7.addFeatures(features_BatasAdminKabupaten_7);
var lyr_BatasAdminKabupaten_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdminKabupaten_7, 
                style: style_BatasAdminKabupaten_7,
                interactive: true,
                title: '<img src="styles/legend/BatasAdminKabupaten_7.png" /> Batas Admin Kabupaten'
            });
var format_BatasAdminDesa_8 = new ol.format.GeoJSON();
var features_BatasAdminDesa_8 = format_BatasAdminDesa_8.readFeatures(json_BatasAdminDesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdminDesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdminDesa_8.addFeatures(features_BatasAdminDesa_8);
var lyr_BatasAdminDesa_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdminDesa_8, 
                style: style_BatasAdminDesa_8,
                interactive: true,
                title: '<img src="styles/legend/BatasAdminDesa_8.png" /> Batas Admin Desa'
            });
var format_JaringanJalanKabupatenTegal_9 = new ol.format.GeoJSON();
var features_JaringanJalanKabupatenTegal_9 = format_JaringanJalanKabupatenTegal_9.readFeatures(json_JaringanJalanKabupatenTegal_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanKabupatenTegal_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanKabupatenTegal_9.addFeatures(features_JaringanJalanKabupatenTegal_9);
var lyr_JaringanJalanKabupatenTegal_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalanKabupatenTegal_9, 
                style: style_JaringanJalanKabupatenTegal_9,
                interactive: true,
    title: 'Jaringan Jalan Kabupaten Tegal<br />\
    <img src="styles/legend/JaringanJalanKabupatenTegal_9_0.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/JaringanJalanKabupatenTegal_9_1.png" /> Jalan Kereta Api<br />\
    <img src="styles/legend/JaringanJalanKabupatenTegal_9_2.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JaringanJalanKabupatenTegal_9_3.png" /> Jalan Tol<br />\
    <img src="styles/legend/JaringanJalanKabupatenTegal_9_4.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_satelite_1.setVisible(true);lyr_Admin_Kab_Tegal_2.setVisible(true);lyr_batas_kec_kab_tegal_3.setVisible(true);lyr_SungaiKabTegal_4.setVisible(true);lyr_JalanLokal_5.setVisible(true);lyr_BatasAdminKecamatan_6.setVisible(true);lyr_BatasAdminKabupaten_7.setVisible(true);lyr_BatasAdminDesa_8.setVisible(true);lyr_JaringanJalanKabupatenTegal_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_satelite_1,lyr_Admin_Kab_Tegal_2,lyr_batas_kec_kab_tegal_3,lyr_SungaiKabTegal_4,lyr_JalanLokal_5,lyr_BatasAdminKecamatan_6,lyr_BatasAdminKabupaten_7,lyr_BatasAdminDesa_8,lyr_JaringanJalanKabupatenTegal_9];
lyr_Admin_Kab_Tegal_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', });
lyr_batas_kec_kab_tegal_3.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_SungaiKabTegal_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', });
lyr_JalanLokal_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_BatasAdminKecamatan_6.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_BatasAdminKabupaten_7.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_BatasAdminDesa_8.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_JaringanJalanKabupatenTegal_9.set('fieldAliases', {'fungsi': 'fungsi', 'rencana': 'rencana', });
lyr_Admin_Kab_Tegal_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', });
lyr_batas_kec_kab_tegal_3.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_SungaiKabTegal_4.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', });
lyr_JalanLokal_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_BatasAdminKecamatan_6.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_BatasAdminKabupaten_7.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_BatasAdminDesa_8.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_JaringanJalanKabupatenTegal_9.set('fieldImages', {'fungsi': 'TextEdit', 'rencana': 'TextEdit', });
lyr_Admin_Kab_Tegal_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', });
lyr_batas_kec_kab_tegal_3.set('fieldLabels', {'WADMKC': 'inline label', });
lyr_SungaiKabTegal_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', });
lyr_JalanLokal_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_BatasAdminKecamatan_6.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_BatasAdminKabupaten_7.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_BatasAdminDesa_8.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_JaringanJalanKabupatenTegal_9.set('fieldLabels', {'fungsi': 'no label', 'rencana': 'inline label', });
lyr_JaringanJalanKabupatenTegal_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});