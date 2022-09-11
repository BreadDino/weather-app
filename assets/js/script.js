var searchEl = document.querySelector("#search");
var searchEl = document.querySelector("#search");
// citys = "los angeles"




searchEl.addEventListener("click", fetchWeather);
function fetchWeather(event) {
  var citys = document.querySelector(".citys").value;
  removeprevious();
  if (!citys) {
    alert("please enter a city");
    return;
  }
  console.log(citys);
  window.localStorage.setItem("1", citys);
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
      place.classList.add("city");
      // create p for temp
      var tempature = document.createElement("p");
      tempature.textContent = "Temp: " + data.main.temp + " F";
      currentResults.append(tempature);
      tempature.classList.add("details");
      // create p for wind
      var wind = document.createElement("p");
      wind.textContent = "Wind: " + data.wind.speed + " mph";
      currentResults.append(wind);
      wind.classList.add("details");
      // create p for humidity
      var humidity = document.createElement("p");
      humidity.textContent = "Humidity: " + data.main.humidity + " %";
      currentResults.append(humidity);
      humidity.classList.add("details");
      fetchForecast();
    });
}



function recentsearch() {
  var historyEl = document.querySelector("#search-history");
  var search1 = window.localStorage.getItem("1");
  var firstSearch = document.createElement("button");
  firstSearch.classList.add("lastsearch");
  firstSearch.textContent = search1;
  historyEl.append(firstSearch);
}



function removeprevious() {
  var details = document.querySelector(".details");
  if (details) {
    for (let i = 0; i < 30; i++)
    var cityRemove = document.querySelector(".city");
    cityRemove.remove();
    var details1 = document.querySelector(".details");
    details1.remove();
    var details2 = document.querySelector(".details");
    details2.remove();
    var details3 = document.querySelector(".details");
    details3.remove();
    var details4 = document.querySelector(".details");
    details4.remove();
    var details5 = document.querySelector(".details");
    details5.remove();
    var details6 = document.querySelector(".details");
    details6.remove();
    var details7 = document.querySelector(".details");
    details7.remove();
    var details8 = document.querySelector(".details");
    details8.remove();
    var details9 = document.querySelector(".details");
    details9.remove();
    var details10 = document.querySelector(".details");
    details10.remove();
    var details11 = document.querySelector(".details");
    details11.remove();
    var details12 = document.querySelector(".details");
    details12.remove();
    var details13 = document.querySelector(".details");
    details13.remove();
    var details14 = document.querySelector(".details");
    details14.remove();
    var details15 = document.querySelector(".details");
    details15.remove();
    var details16 = document.querySelector(".details");
    details16.remove();
    var details17 = document.querySelector(".details");
    details17.remove();
    var details18 = document.querySelector(".details");
    details18.remove();
    var details19 = document.querySelector(".details");
    details19.remove();
    var details20 = document.querySelector(".details");
    details20.remove();
    var details21 = document.querySelector(".details");
    details21.remove();
    var details22 = document.querySelector(".details");
    details22.remove();
    var details23 = document.querySelector(".details");
    details23.remove();
  }
}



function fetchForecast(query) {
  var citys = document.querySelector(".citys").value;
  var url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" + citys + "&appid=d7bb72a0ceb5ca152a17cec919b7c2a6&units=imperial";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[1])
      console.log(data.list[9])
      console.log(data.list[17])
      console.log(data.list[25])
      console.log(data.list[33])

      var box1 = document.getElementById("day1")
      // Create date
      var date1 = document.createElement("h3");
      date1.textContent = data.list[1].dt_txt.slice(0, -8);
      box1.append(date1);
      // Create tempature
      var tempature1 = document.createElement("p")
      tempature1.textContent = "Tempature: "+ data.list[1].main.temp + ' F'
      box1.append(tempature1);
      // Create wind
      var wind1 = document.createElement('p')
      wind1.textContent = 'Wind: '+ data.list[1].wind.speed + ' mph'
      box1.append(wind1)
      // Create humidity
      var humidity1 = document.createElement("p")
      humidity1.textContent = "Humidity: "+ data.list[1].main.humidity + ' %'
      box1.append(humidity1);
      // Second Day
      var box2 = document.getElementById("day2")
      // Create date
      var date2 = document.createElement("h3");
      date2.textContent = data.list[9].dt_txt.slice(0, -8);
      box2.append(date2);
      // Create tempature
      var tempature2 = document.createElement("p")
      tempature2.textContent = "Tempature: "+ data.list[9].main.temp + ' F'
      box2.append(tempature2);
      // Create wind
      var wind2 = document.createElement('p')
      wind2.textContent = 'Wind: '+ data.list[9].wind.speed + ' mph'
      box2.append(wind2)
      // Create humidity
      var humidity2 = document.createElement("p")
      humidity2.textContent = "Humidity: "+ data.list[9].main.humidity + ' %'
      box2.append(humidity2);
      // Third Day
      var box3 = document.getElementById("day3")
      // Create date
      var date3 = document.createElement("h3");
      date3.textContent = data.list[17].dt_txt.slice(0, -8);
      box3.append(date3);
      // Create tempature
      var tempature3 = document.createElement("p")
      tempature3.textContent = "Tempature: "+ data.list[17].main.temp + ' F'
      box3.append(tempature3);
      // Create wind
      var wind3 = document.createElement('p')
      wind3.textContent = 'Wind: '+ data.list[17].wind.speed + ' mph'
      box3.append(wind3)
      // Create humidity
      var humidity3 = document.createElement("p")
      humidity3.textContent = "Humidity: "+ data.list[17].main.humidity + ' %'
      box3.append(humidity3);
      // Fourth Day
      var box4 = document.getElementById("day4")
      // Create date
      var date4 = document.createElement("h3");
      date4.textContent = data.list[25].dt_txt.slice(0, -8);
      box4.append(date4);
      // Create tempature
      var tempature4 = document.createElement("p")
      tempature4.textContent = "Tempature: "+ data.list[25].main.temp + ' F'
      box4.append(tempature4);
      // Create wind
      var wind4 = document.createElement('p')
      wind4.textContent = 'Wind: '+ data.list[25].wind.speed + ' mph'
      box4.append(wind4)
      // Create humidity
      var humidity4 = document.createElement("p")
      humidity4.textContent = "Humidity: "+ data.list[25].main.humidity + ' %'
      box4.append(humidity4);
      // Fifth Day
      var box5 = document.getElementById("day5")
      // Create date
      var date5 = document.createElement("h3");
      date5.textContent = data.list[33].dt_txt.slice(0, -8);
      box5.append(date5);
      // Create tempature
      var tempature5 = document.createElement("p")
      tempature5.textContent = "Tempature: "+ data.list[33].main.temp + ' F'
      box5.append(tempature5);
      // Create wind
      var wind5 = document.createElement('p')
      wind5.textContent = 'Wind: '+ data.list[33].wind.speed + ' mph'
      box5.append(wind5)
      // Create humidity
      var humidity5 = document.createElement("p")
      humidity5.textContent = "Humidity: "+ data.list[33].main.humidity + ' %'
      box5.append(humidity5);
      date1.classList.add("details")
      date2.classList.add("details")
      date3.classList.add("details")
      date4.classList.add("details")
      date5.classList.add("details")
      tempature1.classList.add("details")
      tempature2.classList.add("details")
      tempature3.classList.add("details")
      tempature4.classList.add("details")
      tempature5.classList.add("details")
      wind1.classList.add("details")
      wind2.classList.add("details")
      wind3.classList.add("details")
      wind4.classList.add("details")
      wind5.classList.add("details")
      humidity1.classList.add("details")
      humidity2.classList.add("details")
      humidity3.classList.add("details")
      humidity4.classList.add("details")
      humidity5.classList.add("details")
    });
}
recentsearch();