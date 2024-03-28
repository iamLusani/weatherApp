function weatherApi(response) {
  let tempretureElement = document.querySelector("#numberUnit");
  let description = document.querySelector("#description");
  let humTemperature = document.querySelector("#humidity");
  let speedTemperature = document.querySelector("#windSpeed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let temperature = response.data.temperature.current;

  console.log(response.data.condition.description);

  timeElement.innerHTML = `${date.getHours()}:`;
  speedTemperature.innerHTML = `${response.data.wind.speed}km/h`;
  humTemperature.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
  tempretureElement.innerHTML = Math.round(temperature);
}

function searchPlace(city) {
  let apiKey = "56ftc44o535ed4b849450cf23fa64b07";
  let apiUrl = ` https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric `;
  axios.get(apiUrl).then(weatherApi);
  console.log(apiUrl);
}

function searchCity(event) {
  event.preventDefault();
  let inputForm = document.querySelector("#inputForm");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${inputForm.value}`;
  searchPlace(inputForm.value);
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", searchCity);
