//const apikey="72f726ed735cf13c2db5a61c04972d48";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?appid=72f726ed735cf13c2db5a61c04972d48&units=metric&q=";
//const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=72f726ed735cf13c2db5a61c04972d48";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn")
const weathericon = document.querySelector(".weather-icon");



async function checkWeather(city){
    const response = await fetch(apiURL+ city); 
    let data = await response.json();
    console.log(data);

   
    //we need to change city name, wind and humidity
    document.querySelector(".city").innerHTML=data.name  //go in console on firefox to see the object, in it check  which property contains the city name that was 'name
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";

    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    
    if(data.weather[0].main=="Mist"){
        weathericon.src="mist.jpg";
    }else if(data.weather[0].main=="Clouds"){
        weathericon.src="images.jpg";
    }else if(data.weather[0].main=="Clear"){
        weathericon.src="clear.jpg"
    }
   
    
    document.querySelector('.weather').style.display = 'block';
    input.value="";
}

 
btn.addEventListener("click",()=>{
    checkWeather(input.value);

}    );

