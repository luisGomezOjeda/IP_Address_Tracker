let map,
myIcon

export function getMap(lat,lng,traslate = false){
        if(traslate !== true){
        map = L.map('map').setView([lat,lng],19);



            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);



        myIcon = L.icon({
            iconUrl: './assets/images/icon-location.svg',
            iconAnchor: [22, 54],
        });

        L.marker(([lat,lng]), {icon: myIcon}).addTo(map);
    }else{
        ([lng,traslate],19);
    }
}

export function resetMap(){
    map.remove();
}