export function getMap(array){
 let map = L.map('map').setView(array,19);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let myIcon = L.icon({
        iconUrl: './assets/images/icon-location.svg',
        iconAnchor: [22, 54],
        popupAnchor: [0, 0],
        shadowUrl: '',
        shadowSize: [0, 0],
        shadowAnchor: [0, 0]
    });
    

    L.marker(array).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


    L.marker((array), {icon: myIcon}).addTo(map);


}