// peticiones con IPfy : https://geo.ipify.org/api/v2/country?apiKey=at_rtamG2Krj8ByKrI1xbknbTewDYf8F&ipAddress=8.8.8.8
// clave IPfy : at_rtamG2Krj8ByKrI1xbknbTewDYf8F

import {getMap} from "./Map.js";
import {getPositionIP} from "./ipify.js";

document.addEventListener("DOMContentLoaded",(e)=>{
    // getPositionIP(getMap);
    getMap([-40.7343896,-64.941539]);
});

// document.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const address_input = document.querySelector(".address-input input[type=text]");
//     getPositionIP(getMap,address_input.value);
// })