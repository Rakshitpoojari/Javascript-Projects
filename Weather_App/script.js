// app.js
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

const weatherIcons = {
  clouds: "images/clouds.png",
  clear: "images/clear.png",
  rain: "images/rain.png",
  drizzle: "images/drizzle.png",
  mist: "images/Mist.png"
};

let debounceTimer;
searchBtn.addEventListener("click", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const city = searchBox.value.trim();
    if (city) {
      checkWeather(city);
    }
  }, 300);
});

async function checkWeather(city) {
  try {
    const apiKey = "f04d54732055581e9c51ed28d4d78937"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    if (response.status === 404) {
      showError("City not found");
    } else {
      hideError();
      updateWeatherInfo(data);
    }
  } catch (error) {
    console.error(error);
    showError("An error occurred. Please try again later.");
  }
}

function updateWeatherInfo(data) {
  cityElement.textContent = data.name;
  tempElement.textContent = Math.round(data.main.temp) + "°C";
  humidityElement.textContent = data.main.humidity + "%";
  windElement.textContent = data.wind.speed + "km/h";
  
  const weatherMain = data.weather[0].main.toLowerCase();
  weatherIcon.src = weatherIcons[weatherMain] || "default.png";
}

function showError(message) {
  document.querySelector(".error").style.display = "block";
  document.querySelector(".weather").style.display = "none";
  document.querySelector(".error").textContent = message;
}

function hideError() {
  document.querySelector(".error").style.display = "none";
  document.querySelector(".weather").style.display = "block";
}

// Display initial weather on page load (optional)
// checkWeather("DefaultCity"); // Replace "DefaultCity" with a default city
