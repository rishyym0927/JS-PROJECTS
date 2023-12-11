const apiKey = "875afefb5f69c6968827e242aa89d833";
const apiId = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiId + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " " + "C";
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;

  if (data.weather[0].main == "Clouds") {
    wIcon.src = "clouds.png";
  }

  if (data.weather[0].main == "Clear") {
    wIcon.src = "clear.png";
  }

  if (data.weather[0].main == "Drizzlw") {
    wIcon.src = "drizzle.png";
  }

  if (data.weather[0].main == "Humidity") {
    wIcon.src = "humidity.png";
  }

  if (data.weather[0].main == "Rain") {
    wIcon.src = "rain.png";
  }

  if (data.weather[0].main == "Snow") {
    wIcon.src = "snow.png";
  }
}

searchBtn.addEventListener("click", () => {
    document.querySelector(".weather").style.display='block'
  checkWeather(searchBox.value);
});

checkWeather();
