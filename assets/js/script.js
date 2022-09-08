var searchEl = document.querySelector("#search");
var searchEl = document.querySelector("#search");

searchEl.addEventListener("click", fetchWeather);
function fetchWeather(event) {
  removeprevious();
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
      place.classList.add('city')
      // create p for temp
      var tempeture = document.createElement("p");
      tempeture.textContent = "Temp: " + data.main.temp + "F";
      currentResults.append(tempeture);
      tempeture.classList.add("details")
      // create p for wind
      var wind = document.createElement("p");
      wind.textContent = "Wind: " + data.wind.speed + "mph";
      currentResults.append(wind);
      wind.classList.add("details")
      // create p for humidity
      var humidity = document.createElement("p");
      humidity.textContent = "Humidity: " + data.main.humidity + "%";
      currentResults.append(humidity);
      humidity.classList.add("details")
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
function removeprevious(){
  var details1 = document.querySelector(".details");
  if (details1){
    var cityRemove = document.querySelector(".city");
    cityRemove.remove();
    var details1 = document.querySelector(".details");
    details1.remove();
    var details2 = document.querySelector(".details");
    details2.remove();
    var details3 = document.querySelector(".details");
    details3.remove();
  }
}

recentsearch();