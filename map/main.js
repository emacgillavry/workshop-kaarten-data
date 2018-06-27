var bounds = [
    [3.09326, 50.72915], // Southwest coordinates
    [7.25636, 53.76957]  // Northeast coordinates
];


var map = new mapboxgl.Map({
    container: "map",
    hash: true,
    style:"style.json",
    zoom: 16,
    pitch: 60,
    bearing: -145,
    center: [4.8984,52.3763]
});

map.addControl(new mapboxgl.NavigationControl(), "top-left");


var status = '';

var drieD = d3.select('body');
drieD.on("keypress", function(){
  if(d3.event.key == 3 && status == ''){
    status = '3d';
    goDrieD();
  } else if (d3.event.key == 3 && status == '3d'){
    status = '';
    goFlat();
  }
});

function goDrieD(){
    map.setPaintProperty('3D-buildings', 'fill-extrusion-height', ["*", 0.5,["to-number",["get","height"]]]);
    map.setPaintProperty('3D-buildings', 'fill-extrusion-opacity', 0.8);
};

function goFlat(){
    map.setPaintProperty('3D-buildings', 'fill-extrusion-height', 0);
    map.setPaintProperty('3D-buildings', 'fill-extrusion-opacity', 0);
};
