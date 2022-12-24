export function getMap(){
 let map = L.map('map').setView([-40.7343896,-64.941539],19);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // let polygon = L.polygon([
    //     [51.509, -0.08],
    //     [51.503, -0.06],
    //     [51.51, -0.047]
    // ]).addTo(map);


    let myIcon = L.icon({
        iconUrl: './assets/images/icon-location.svg',
        iconAnchor: [50, 94],
        popupAnchor: [-3, -76],
        shadowUrl: '',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });
    
    L.marker([-40.7343896,-64.941539], {icon: myIcon}).addTo(map);


}