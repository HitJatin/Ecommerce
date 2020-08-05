let lang,long;
days = ["",'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']; 
function get_city()
  {
    let city;
    let input  = document.getElementById("input");
    city = input.value;
    const api = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3959d417f797d4d08be184889edff294";
    let date = new Date(); 

      fetch(api)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        document.getElementById("location").innerHTML=data["name"];
        document.getElementById("temp").innerHTML=data["main"]["temp"];
        document.getElementById("hi-low").innerHTML=data["main"]["temp_max"] + "/" + data["main"]["temp_min"];
      })
  }

function startTime() {
  var p="AM";
  var today = new Date();
  var mo=today.toLocaleString('default', { month: 'long' });
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getDate();
  var ss = today.getDay();
//  var mo =today.getMonth();
  var y = today.getFullYear();
  if (h>12){
    p="PM";
    h-=12;
  }
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('Time').innerHTML = h + ":" + m + ":" + s + " " + p;
  document.getElementById('Date').innerHTML = d + " " + mo + ", " + y;
  document.getElementById('Day').innerHTML=days[ss];
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
        document.getElementById("Time").innerhtml=data.name;
        document.getElementsByClassName("Date").innerhtml=data.name;
        document.getElementById("location").innerHTML=data["name"];
        document.getElementById("temp").innerHTML=data["main"]["temp"];
        document.getElementById("hi-low").innerHTML=data["main"]["temp_max"] + "/" + data["main"]["temp_min"];

      })
    })
  }
