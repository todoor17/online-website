const inputField = document.getElementsByClassName("input")[0];
const button = document.getElementsByClassName("btn")[0];
const todayText = document.getElementsByClassName("temperature-text")[0];
const todaySmallerText = document.getElementsByClassName("today-smaller-text")[0];
const todayImage = document.getElementsByClassName("img")[0];
const localTimeText = document.getElementById("local-time");
const tempMinText = document.getElementById("temp-min");
const tempMaxText = document.getElementById("temp-max");
const minTempText = document.getElementById("temp-min");
const maxTempText = document.getElementById("temp-max");
const precipitationText = document.getElementById("precipitations");
const errorText = document.getElementsByClassName("error")[0];

const leftPart = document.getElementsByClassName("left-part")[0];
const rightPart = document.getElementsByClassName("right-part")[0];
const line = document.getElementsByClassName("line-between")[0];

const todayImagePaths = [["Clear", "Clear", "Clouds", "Clouds", "Rain", "Rain", "Snow", "Snow", "Haze", "Haze"], 
                         ["images/day_clear.png", "images/night_clear.png", "images/day_clouds.png", "images/night_clouds.png",
                          "images/day_rain.png", "images/night_rain.png", "images/day_snow.png", "images/night_snow.png", "images/haze.png", "images/haze.png"]];

async function fetchWeather(cityName) {
    const apiKey = "afe6c04f9adb47afc96faba335161cdc";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            hideOrShowData(1);
            throw new Error("eroare");
        } else {
            hideOrShowData(0);
            const data = await response.json();

            const temperature = parseFloat(data.main.temp - 273.15).toFixed(1);
            const typeOfWeather = data.weather[0].main;
            const unixTimestamp = data.dt;
            const timeshift = parseInt(data.timezone);
            const localtime = unixTimestampToHoursAndMinutes(unixTimestamp, timeshift);
            const sunriseUnix = data.sys.sunrise;
            const sunsetUnix = data.sys.sunset;
            const sunrise = unixTimestampToHour(sunriseUnix, timeshift);
            const sunset = unixTimestampToHour(sunsetUnix, timeshift);
            const localHour = unixTimestampToHour(unixTimestamp, timeshift);
            const countryTag = data.sys.country;
            const date = new Date();
            const minutes = date.getMinutes();

            setWeatherImage(typeOfWeather, localHour, sunrise, sunset);


            todayText.textContent = temperature + "°C";
            todaySmallerText.textContent = cityName + ", " + countryTag;
            if (minutes < 10) {
                localTimeText.textContent = "Local time: " + localHour + ":0" + minutes; 
            } else {
                localTimeText.textContent = "Local time: " + localHour + ":" + minutes;
            }

            return { lat: data.coord.lat, lon: data.coord.lon };
        }
    } catch(error) {
        console.error(error);
    }
}

async function fetchMoreWeather(cityName) {
    let { lat, lon } = await fetchWeather(cityName);
    const apiKey = "afe6c04f9adb47afc96faba335161cdc";
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMoscow`;

    try {
        const response = await fetch(apiUrl);
        if (!(response.ok)) {
            throw new Error("Error");
        } else {
            const data = await response.json();

            const minTempToday = data.daily.temperature_2m_min[0];
            const maxTempToday = data.daily.temperature_2m_max[0];
            const precipitations = data.hourly.precipitation_probability[0]; 

            minTempText.textContent = "Min temp today: " + minTempToday + "°C";
            maxTempText.textContent = "Max temp today: " + maxTempToday + "°C";
            precipitationText.textContent = "Precipitations now: " + precipitations + "%";
            line.style.opacity = 1;
        }
    } catch(error) {
        console.error(error);
    }
}

inputField.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        console.log("enter");
        cityName = inputField.value;
        fetchMoreWeather(cityName);
    }
})

button.addEventListener("click", () => {
    cityName = inputField.value;
    fetchMoreWeather(cityName);
});

document.addEventListener("DOMContentLoaded", () => {
    line.style.opacity = 0;
})

function unixTimestampToHoursAndMinutes(unixTimestamp, timeshift) {
    const date = new Date(unixTimestamp * 1000);
    const UTCHours = date.getUTCHours();
    const minutes = date.getMinutes();
    const hours = unixTimestampToHour(unixTimestamp, timeshift);
    let localTime;


    minutes < 10
        ? localTime = hours + ":0" + minutes 
        : localTime = hours + ":" + minutes;

    return localTime;
}

function unixTimestampToHour(unixTimestamp, timeshift) {
    const date = new Date(unixTimestamp * 1000);
    let localHour = (date.getUTCHours() + timeshift / 3600) % 24;
    
    if (localHour < 0) {
        localHour += 24;
    }
    
    localHour = Math.floor(localHour);
    return localHour < 10 ? "0" + localHour : localHour;
}

function setWeatherImage(typeOfWeather, localHour, sunriseHour, sunsetHour) {
    let day = 0, start = 0;
    console.log("here");

    if (localHour >= (sunriseHour - 1) && localHour <= (sunsetHour + 1)) {
        day = 1;
    }

    day == 1 ? start = 0 : start = 1;
    
    for (let i = start; i < 10; i += 2) {
        if (todayImagePaths[0][i] == typeOfWeather) {
            todayImage.src = todayImagePaths[1][i];
        }
    }
}

function hideOrShowData(hide) {
    if (hide) {
        leftPart.style.opacity = 0;
        rightPart.style.opacity = 0;
        line.style.opacity = 0;
        errorText.style.opacity = 1;
    } else {
        leftPart.style.opacity = 1;
        rightPart.style.opacity = 1;
        line.style.opacity = 1;
        errorText.style.opacity = 0;
    }
}