window.addEventListner('load', ()=> {
  let lang,long;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long=position.coords.longitude;
      lat=position.coords.latitude;
    })
  }
});
