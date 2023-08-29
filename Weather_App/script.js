
  const apiKey = "f04d54732055581e9c51ed28d4d78937";
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
      checkWeather(searchBox.value);
    }, 300);
  });
  
  async function checkWeather(city) {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      cityElement.innerHTML = data.name;
      tempElement.innerHTML = Math.round(data.main.temp) + "°C";
      humidityElement.innerHTML = data.main.humidity + "%";
      windElement.innerHTML = data.wind.speed + "km/h";
  
      weatherIcon.src = weatherIcons[data.weather[0].main.toLowerCase()] || "default.png";
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., display an error message to the user
    }

