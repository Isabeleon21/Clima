function refreshWeather(response) {
  let temperature = response.data.temperature.current;
  let tempElement = document.querySelector("#temp-unit");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "01btdd9b12oabf9004aa243803e97c7e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Dublin");
