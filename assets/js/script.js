var searchEl = document.querySelector("#search");
var searchEl = document.querySelector("#search");

searchEl.addEventListener("click", fetchWeather);
function fetchWeather(event) {
  event.preventDefault;
  var citys = document.querySelector(".citys").value;
  if (!citys) {
    alert("please enter a city");
    return;
  }
  console.log(citys);
  window.localStorage.setItem('1', citys);
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    citys +
    "&appid=d7bb72a0ceb5ca152a17cec919b7c2a6&units=imperial";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var currentResults = document.querySelector("#current-weather");
      // create h2 for name of city
      var place = document.createElement("h2");
      place.textContent = data.name;
      currentResults.append(place);

      // create p for temp
      var tempeture = document.createElement("p");
      tempeture.textContent = "Temp: " + data.main.temp + "F";
      currentResults.append(tempeture);
      // create p for wind
      var tempeture = document.createElement("p");
      tempeture.textContent = "Wind: " + data.wind.speed + "mph";
      currentResults.append(tempeture);
      // create p for humidity
      var tempeture = document.createElement("p");
      tempeture.textContent = "Humidity: " + data.main.humidity + "%";
      currentResults.append(tempeture);
    });
}
function recentsearch() {
    var historyEl = document.querySelector("#search-history");
    var search1 = window.localStorage.getItem("1");
    var firstSearch = document.createElement("button");
    firstSearch.classList.add("lastsearch")
    firstSearch.textContent = search1;
    historyEl.append(firstSearch);
}

recentsearch();