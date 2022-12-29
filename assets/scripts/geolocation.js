export function getGeolocation(fun){

 const success = (position)=>{
  let coords = [position.coords.latitude,position.coords.longitude];
  
  fun(coords);
 },
 err = (err)=> console.error(err); 

 navigator.geolocation.getCurrentPosition(success,err);
}