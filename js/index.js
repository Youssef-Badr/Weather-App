
async function search(query) {
  let temp = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e05b688c16474f21b8c123808241412&q=${query}&days=3`
  );
//   console.log(t);

  if (temp.ok && 400 != temp.status) {
    let query = await temp.json();
    console.log(query);

    displayCurrent(query.location, query.current),
      displayAnother(query.forecast.forecastday);
  }
}
document.getElementById("search").addEventListener("keyup", (query) => {
  search(query.target.value);
});
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function displayCurrent(place, time) {
    console.log(place);
    console.log(time);
    
    
  if (null != time) {
    var e = new Date(time.last_updated.replace(" ", "T"));
    // console.log(e);
    
    console.log(days[e.getDay()]);
    console.log(e.getDate());
    console.log(monthNames[e.getMonth()]);
    

    
    let n = `<div class="today forecast">\n    <div class="forecast-header"  id="today">\n    <div class="day">${
      days[e.getDay()]
    }</div>\n    <div class=" date">${
      e.getDate() + monthNames[e.getMonth()]
    }</div>\n    </div>    <div class="forecast-content" id="current">\n    <div class="location">${
      place.name
    }</div>\n    <div class="degree">\n        <div class="num">${
      time.temp_c
    }<sup>o</sup>C</div>\n      \n        <div class="forecast-icon">\n            <img src="https:${
      time.condition.icon
    }" alt="" width=90>\n        </div>\t\n    \n    </div>\n    <div class="custom">${
      time.condition.text
    }</div>\n    <span><img class="pe-1" src="images/icon-umberella@2x.png" alt="">20%</span>\n\t\t\t\t\t\t\t\t<span><img class="pe-1"  src="images/icon-wind@2x.png" alt="">18km/h</span>\n\t\t\t\t\t\t\t\t<span><img class="pe-1"  src="images/icon-compass@2x.png" alt="">East</span>\n    </div>\n</div>`;
    document.getElementById("forecast").innerHTML = n;
  }
}

var globlaVar;
function displayAnother(forecastday) {
    // console.log(forecastday);
    
//     for (let e = 1; e < forecastday.length; e++){
// // console.log(l.getDate());




  let t = "";
  for (let e = 1; e < forecastday.length ; e++) {
    // console.log(forecastday.length);
    
    var date = new Date(forecastday[e].date)
    // console.log(l.getDate());
    // console.log(monthNames[l.getMonth()]);
    t += `\t<div class="forecast">\n        <div class="forecast-header">\n            <div class="day">${
      days[new Date(forecastday[e].date.replace(" ", "T")).getDay()]
    }</div>\n   
    
    
   <div class=" date">${
      date.getDate() + monthNames[date.getMonth()]
    }</div>\n
    
    
    
    </div>    <div class="forecast-content">\n            <div class="forecast-icon">\n                <img src="https:${
        forecastday[e].day.condition.icon
    }" alt="" width=48>\n            </div>\n            <div class="degree">${
        forecastday[e].day.maxtemp_c
    }<sup>o</sup>C</div>\n            <small>${
        forecastday[e].day.mintemp_c
    }<sup>o</sup></small>\n            <div class="custom">${
        forecastday[e].day.condition.text
    }</div>\n        </div>\n        </div>`};
  document.getElementById("forecast").innerHTML += t;
  
}
search("cairo");


var display = document.querySelector("#display");
var homePage = document.querySelector("#homePage")
var home = document.querySelector(".home");
var contact = document.querySelector("#contact");

display.addEventListener("click", function() {
contact.classList.replace("d-none","d-block");
home.classList.add("d-none");

}) 


homePage.addEventListener("click", function() {
    contact.classList.replace("d-block","d-none");
    home.classList.remove("d-none");


})