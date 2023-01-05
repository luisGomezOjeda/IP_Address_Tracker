import {getPositionIP} from "./ipify.js";
import {getMap,resetMap} from "./Map.js";

document.addEventListener("DOMContentLoaded",(e)=>{
});
getPositionIP(getMap);

document.addEventListener("submit",(e)=>{
    e.preventDefault();
    const address_input = document.querySelector(".address-input input[type=text]");
    console.log(address_input.value);
    getPositionIP(getMap,resetMap,address_input.value);
});