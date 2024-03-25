function searchCity(event) {
  event.preventDefault();
  let inputForm = document.querySelector("#inputForm");
  console.log(inputForm.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${inputForm.value}`;
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", searchCity);

function weatherApi(response) {
  let temp = document.querySelector("#numberUnit");
  let numberUnit = response.data.temperature.current;
  let h1 = document.querySelector("h1");
  console.log("response.data.temperature");
}

let city = "ermelo";
let apiKey = "56ftc44o535ed4b849450cf23fa64b07";
let apiUrl = ` https://api.shecodes.io/weather/v1/current?query= ${city}&key=${56ftc44o535ed4b849450cf23fa64b07} `;
axios.get(apiUrl).then(weatherApi);
