export function getMap(){
//  let map = L.map('map').setView([-40.7343896,-64.941539],19);

//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(map);

//     // let polygon = L.polygon([
//     //     [51.509, -0.08],
//     //     [51.503, -0.06],
//     //     [51.51, -0.047]
//     // ]).addTo(map);


    let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    let myIcon = L.icon({
        iconUrl: './assets/images/icon-location.svg',
        iconAnchor: [22, 54],
        popupAnchor: [0, 0],
        shadowUrl: '',
        shadowSize: [0, 0],
        shadowAnchor: [0, 0]
    });
    
    L.marker([51.5, -0.09], {icon: myIcon}).addTo(map);


}