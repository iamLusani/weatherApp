function searchCity(event) {
  event.preventDefault();
  let inputForm = document.querySelector("#inputForm");
  console.log(inputForm.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${inputForm.value}`;
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", searchCity);
