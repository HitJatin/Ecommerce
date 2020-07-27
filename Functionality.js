
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
        document.getElementById("Time").innerHTML=date;
        document.getElementById("hi-low").innerHTML=data["main"]["temp_max"] + "/" + data["main"]["temp_min"];

      })
  }

  
    
