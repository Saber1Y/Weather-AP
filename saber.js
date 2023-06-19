const apiKey = "d85052b54dfc8a5b5ef0fe33821c1b80";
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBar = document.querySelector(".search-bar input");
const searchbtn = document.querySelector(".search-bar button");


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

document.getElementById("city").innerHTML = data.name;
document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + "°C";
document.getElementById("humidity").innerHTML = data.main.humidity + "%";
document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value);
})
checkWeather(city);