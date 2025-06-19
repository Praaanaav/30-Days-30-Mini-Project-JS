const apikey = "bb46a9d5c999899b0214e7c394c1374f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchbar = document.querySelector(".searchbar");
const searchbtn = document.querySelector(".searchbtn");
const wimg = document.querySelector(".wimg");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}&units=metric`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".temptext").innerHTML = Math.round(data.main.temp);
  document.querySelector(".citytext").innerHTML = data.name;
  document.querySelector(".humtext").innerHTML = data.main.humidity + "%";
  document.querySelector(".windtext").innerHTML = data.wind.speed + "  km/h";

  if (data.weather[0].main == "Clouds") {
    wimg.src = "./img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    wimg.src = "./img/cloudy.png";
  } else if (data.weather[0].main == "Rain") {
    wimg.src = "./img/heavy-rain.png";
  } else if (data.weather[0].main == "Dizzle") {
    wimg.src = "./img/dizzle.png";
  } else if (data.weather[0].main == "Mist") {
    wimg.src = "./img/mist.png";
  }
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbar.value);
});
searchbar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkweather(searchbar.value);
  }
});
