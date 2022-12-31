// peticiones con IPfy : https://geo.ipify.org/api/v2/country?apiKey=at_rtamG2Krj8ByKrI1xbknbTewDYf8F&ipAddress=8.8.8.8
// clave IPfy : at_rtamG2Krj8ByKrI1xbknbTewDYf8F

// f8fe272ae1de0d94f5efb3b66dfef3bb


// 168.196.24.62

const d = document;


export async function getPositionIP(fun,addressIp = undefined){
 if(addressIp === undefined){
  try{
  const res = await fetch("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_rtamG2Krj8ByKrI1xbknbTewDYf8F&ipAddress=8.8.8.8");
  const json = await res.json();
  console.log(json);
  
  d.querySelector(".info-IPaddress li p").textContent = `${json.ip}`;
  d.querySelector(".info-location li p").textContent = `${json.location.city}`;
  d.querySelector(".info-timeZone li p").textContent = `${json.location.timezone}`;
  d.querySelector(".info-ISP li p").textContent = `${json.isp}`;
  
   fun([json.location.lat,json.location.lng]);

  }
  catch(err){
   console.log(err);
  }
 }else{
  try{
   const res = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_rtamG2Krj8ByKrI1xbknbTewDYf8F&ipAddress=192.168.0.102`,{
    headers : {
      "apiKey" : "at_rtamG2Krj8ByKrI1xbknbTewDYf8F"
    }
   });
  const json = await res.json();

  alert(JSON.stringify(json));
  
  
 }catch(err){
   console.log(err);
  }
 }
}
