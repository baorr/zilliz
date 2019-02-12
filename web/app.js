mapboxgl.accessToken = 'pk.eyJ1Ijoic2VlbnllYSIsImEiOiJjanJ6eTlvamsxZHVkNDlsdm40MnVoejc4In0.AzM2YIBfmI47aJQLfoO8zg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center:[120.63, 31.16],
  zoom: 15
});

const randomNumber = (start = 120.63, end = 31.16) => {
  var diff = end - start;
  return (Math.random()) * diff + start;
}

const genFeature = (N = 30) => {
    let arrs = [];
    for(let i = 0;i < N;i++){
      arrs.push({
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [randomNumber(120.615, 120.645), randomNumber(31.156,  31.172)]
        }
      });
    }
    return arrs;
};

const features = genFeature();

map.on('load', function () {
  map.loadImage('https://i.imgur.com/MK4NUzI.png', function (error, image) {
    if (error) throw error;
    map.addImage('cat', image);
    map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": features
        }
      },
      "layout": {
        "icon-image": "cat"
      }
    });
  });
});

map.on('click', (a) => {
  console.log(map, a)
});
