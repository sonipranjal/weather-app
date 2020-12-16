/**
 * Weather App
 * Done: Complete getWeatherData() to return json response Promise
 * Done: Complete searchCity() to get user input and get data using getWeatherData()
 * Done: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
  // console.log(FULL_URL);
  return fetch(FULL_URL).then((response) => response.json());
  // return promise.then((response) => {
  //   return response.json();
  // });
};

// console.log(getWeatherData("miami"));

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData);
  const city = document.querySelector("#city-name");
  const temp = document.querySelector("#temp");
  const min_temp = document.querySelector("#min-temp");
  const max_temp = document.querySelector("#max-temp");
  const description = document.querySelector("#weather-type");

  city.innerText = weatherData.name;
  temp.innerText = weatherData.main.temp;
  min_temp.innerText = weatherData.main.temp_min;
  max_temp.innerText = weatherData.main.temp_max;
  description.innerText = weatherData.weather[0].main;
};
