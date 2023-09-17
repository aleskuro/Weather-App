const apikey = "d006cdb5908cd99c7a8822d70cfa6162";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")


async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json();
        document.querySelector(".error").style.display = "none"
    // console.log(data);
    const int_temp = Math.floor(data.main.temp) 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = int_temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == 'Clouds'){
        weathericon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == 'Clear')
    {
        weathericon.src = "images/clear.png"
    }
    else if(data.weather[0].main == 'Rain')
    {
        weathericon.src = "images/clear.png"
    }
    else if(data.weather[0].main == 'Drizzle')
    {
        weathericon.src = "images/clear.png"
    }
    else if(data.weather[0].main == 'Mist')
    {
        weathericon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block"
    }


    
}





searchbox.addEventListener("keydown", (event)=>{
    if (event.key == 'Enter'){
        checkweather(searchbox.value);
    }
})

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})