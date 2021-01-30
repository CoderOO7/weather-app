import {
  OPEN_WEATHER_API_BASE_URL,
  OPEN_WEATHER_API_KEY,
  OPEN_WEATHER_API_ENDPOINT_WEATHER,
} from "./modules/constants.js";

(function initApp(window, document) {
  console.log("App loaded");

  window.addEventListener("DOMContentLoaded", async (e) => {
    let requestURL = `${OPEN_WEATHER_API_BASE_URL}/${OPEN_WEATHER_API_ENDPOINT_WEATHER}?q=delhi&appid=${OPEN_WEATHER_API_KEY}`;
    let response = await fetch(requestURL);
    let weatherData = await response.json();

    console.log(weatherData);
  });
})(window, document);
