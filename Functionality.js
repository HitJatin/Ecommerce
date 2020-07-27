let lang,long;
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('Time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
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
        console.log(data.name);
        $("#location").text(data.name);
        document.getElementById("temp").innerhtml=data.name;
        document.getElementById("Time").innerhtml=data.name;
        document.getElementById("hi-low").innerhtml=data.name;
        document.getElementsByClassName("Date").innerhtml=data.name;
      })
    })
  }
