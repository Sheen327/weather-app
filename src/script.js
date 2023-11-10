let currentTime = new Date();

let p = document.querySelector("#current-date");

let date = currentTime.getDate();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let year = currentTime.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[currentTime.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[currentTime.getMonth()];

p.innerHTML = `${day} ${date}th ${month}, ${year}, ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");

  let city = searchInput.value;
  let apiKey = "1b524a706tf6eae1f36e8097foa05f9c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);

  h1.innerHTML = city;
}

function displayTemp(response) {
  let newTemp = document.querySelector("#current-temp");
  let temp = Math.round(response.data.temperature.current);
  newTemp.innerHTML = `${temp}°c`;
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", searchCity);
