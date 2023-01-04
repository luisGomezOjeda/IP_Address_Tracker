// peticiones con IPfy : https://geo.ipify.org/api/v2/country?apiKey=at_rtamG2Krj8ByKrI1xbknbTewDYf8F&ipAddress=8.8.8.8
// clave IPfy : at_rtamG2Krj8ByKrI1xbknbTewDYf8F

import {getPositionIP} from "./ipify.js";
import {getMap} from "./Map.js";

document.addEventListener("DOMContentLoaded",(e)=>{
    getPositionIP(getMap);
});

// const address_input = document.querySelector(".address-input input[type=text]");
// console.log(address_input);
// document.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     getPositionIP(getMap,address_input.value);
// })