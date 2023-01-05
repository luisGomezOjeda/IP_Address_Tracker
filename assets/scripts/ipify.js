const d = document;


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


export function getPositionIP(funGet,funReset,addressIp = undefined){
 if(addressIp === undefined){
  positionInit(funGet);
 }else{
  positionAddress(funGet,funReset,addressIp);
 }
}
