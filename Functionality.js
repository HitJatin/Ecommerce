let lang,long;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long=position.coords.longitude;
      lat=position.coords.latitude;

      const api="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=3777a8a9311db88d473fc57260aab8e2"

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        document.getElementById("location").innerhtml="Noida";
        document.getElementById("temp").innerhtml=data.name;
        document.getElementById("Time").innerhtml=data.name;
        document.getElementById("hi-low").innerhtml=data.name;
        document.getElementsByClassName("Date").innerhtml=data.name;
      })
    })
  }
