let map,
myIcon,
d = document;

function getMap(lat,lng){
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
}


function resetMap(){
    map.remove();
}


async function positionInit(fun){
  try{
    const res = await fetch("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_rtamG2Krj8ByKrI1xbknbTewDYf8F&ipAddress=8.8.8.8");
    const json = await res.json();
    console.log(json);
    
    d.querySelector(".info-IPaddress li p").textContent = `${json.ip}`;
    d.querySelector(".info-location li p").textContent = `${json.location.city}`;
    d.querySelector(".info-timeZone li p").textContent = `${json.location.timezone}`;
    d.querySelector(".info-ISP li p").textContent = `${json.isp}`;
    
     fun(json.location.lat,json.location.lng);
  
    }
    catch(err){
     console.log(err);
    }
}

async function positionAddress(funGet,funReset,addressIp){
  try{
    const res = await fetch("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_rtamG2Krj8ByKrI1xbknbTewDYf8F&ipAddress=" + addressIp,{
      method: "GET",
      headers: {
        // "apiKey" : "at_rtamG2Krj8ByKrI1xbknbTewDYf8F"
      }
    });
    const json = await res.json();
    console.log(json);
    
    d.querySelector(".info-IPaddress li p").textContent = `${json.ip}`;
    d.querySelector(".info-location li p").textContent = `${json.location.city}`;
    d.querySelector(".info-timeZone li p").textContent  = `${json.location.timezone}`;
    d.querySelector(".info-ISP li p").textContent = `${json.isp}`;
    
      console.log(json.location.lat,json.location.lng);


      funReset();
      funGet(json.location.lat,json.location.lng);
  
    }catch(err){
     console.log(err);
    }
}


function getPositionIP(funGet,funReset,addressIp = undefined){
 if(addressIp === undefined){
  positionInit(funGet);
 }else{
  positionAddress(funGet,funReset,addressIp);
 }
}



document.addEventListener("DOMContentLoaded",(e)=>{
    getPositionIP(getMap);
});

document.addEventListener("submit",(e)=>{
    e.preventDefault();
    const address_input = document.querySelector(".address-input input[type=text]");
    console.log(address_input.value);
    getPositionIP(getMap,resetMap,address_input.value);
});