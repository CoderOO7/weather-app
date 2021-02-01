import { weatherDataController } from "./modules/controllers/WeatherData.js";
import { renderDOM } from "./modules/render.js";
import { DOMStuff } from "./modules/domStuff.js";
import "./modules/staticEventListeners.js";

(function initApp(window, document) {
  console.log("App loaded");

  window.addEventListener("DOMContentLoaded", async (e) => {
    try {
      await weatherDataController.fetchData("delhi");
      renderDOM.weatherCurrent();
    } catch (err) {
      console.error(err);
      DOMStuff.errorMsgDom.show(err.message);
    }
  });
})(window, document);
