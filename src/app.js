function weatherApi(response) {
  let tempretureElement = document.querySelector("#numberUnit");
  let description = document.querySelector("#description");
  let humTemperature = document.querySelector("#humidity");
  let speedTemperature = document.querySelector("#windSpeed");
  let timeElement = document.querySelector("#time");
  let temperature = response.data.temperature.current;
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src ="${response.data.condition.icon_url}" class="emojiIcon"  />`;
  console.log(response.data.condition.icon_url);
  speedTemperature.innerHTML = `${response.data.wind.speed}km/h`;
  humTemperature.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
  tempretureElement.innerHTML = Math.round(temperature);

  getForecastData(response.data.city);
}
let now = new Date();
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];

time.innerHTML = `${day} ${hour}:${minutes}`;

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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecastData(city) {
  let apikey = "56ftc44o535ed4b849450cf23fa64b07";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}`;
  axios.get(apiUrl).then(displayForcast);
}

function displayForcast(response) {
  console.log(response.data);
  let forcastElement = document.querySelector("#forcast");

  let forcastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 4) {
      forcastHtml =
        forcastHtml +
        `<div class="allElements">
            <div class="col-2">
              <div class="days-of-the-week">${formatDay(day.time)}</div>
              <div ><img src="${
                day.condition.icon_url
              }" class="weatherIcons" /></div>
              <div class="subForcastNumber">
                <span class="subForcastNumberMin">${Math.round(
                  day.temperature.minimum
                )}° </span>/
                <span class="subForcastNumberMax">${Math.round(
                  day.temperature.maximum
                )}° </span>
              </div>
            </div>
          `;
    }
  });
  forcastElement.innerHTML = forcastHtml;
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", searchCity);

searchPlace("Ermelo");
