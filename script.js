

const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric&standard&q="
const apikey = "5c173eff41e3cdc3e652b9d5d260afce"

const imagesrc = document.querySelector(".weather img")
const cityname = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");

searchbutton.addEventListener("click", () => {
    fetchweatherdata(cityname.value);
})

async function fetchweatherdata(city) {
    const data = await fetch(api + city + `&appid=${apikey}`)
    const dataresponce = await data.json();
    
    document.querySelector(".city").innerHTML = dataresponce.name
    document.querySelector(".temp").innerHTML = Math.round(dataresponce.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = dataresponce.main.humidity + "%"
    document.querySelector(".wind").innerHTML = dataresponce.wind.speed + " Km/h"

    console.log(dataresponce.weather)

    weathertype = dataresponce.weather[0].main 

    if(weathertype === 'Mist') {
        imagesrc.src = "weather-app-images/images/mist.png"
    } else if (weathertype === 'Rain') {
        imagesrc.src = "weather-app-images/images/rain.png"
    } else if (weathertype === 'Drizzle') {
        imagesrc.src = "weather-app-images/images/drizzle.png"
    } else if (weathertype === 'Clouds') {
        imagesrc.src = "weather-app-images/images/clouds.png"
    } else if (weathertype === 'Clear') {
        imagesrc.src = "weather-app-images/images/clear.png"
    } else if(weathertype === 'Haze') {
        imagesrc.src = "weather-app-images/images/bhaze.png"
    } else {
        imagesrc.src = "weather-app-images/images/snow.png"
    };
   
};
