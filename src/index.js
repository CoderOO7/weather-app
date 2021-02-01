import { weatherDataController } from "./modules/controllers/WeatherData.js";
import { renderDOM } from "./modules/render.js";
import "./modules/staticEventListeners.js";

(function initApp(window, document) {
  console.log("App loaded");

  window.addEventListener("DOMContentLoaded", async (e) => {
    const weatherData = await weatherDataController.fetchData("delhi");
    console.log(weatherData);
    renderDOM.weatherCurrent();
  });
})(window, document);
