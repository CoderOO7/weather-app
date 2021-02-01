import { weatherDataController } from "./WeatherData.js";
import { staticDomElements } from "../domElements.js";
import { DOMStuff } from "../domStuff.js";
import { renderDOM } from "../render.js";

const searchBoxController = (() => {
  function clearInputText(e) {
    const searchBoxFormEl = staticDomElements.searchBoxFormEl;
    searchBoxFormEl.elements.city.value = "";
  }

  async function handleSearchBoxFormSubmit(e) {
    e.preventDefault();

    const searchBoxFormEl = staticDomElements.searchBoxFormEl;
    const city = searchBoxFormEl.elements.city.value;
    const weatherData = await weatherDataController.fetchData(city);

    if (weatherData.cod === "404") {
      DOMStuff.searchBoxErrorDom.show(weatherData.message);
      return;
    }

    DOMStuff.searchBoxErrorDom.close();
    renderDOM.weatherCurrent();
  }

  return {
    handleSearchBoxFormSubmit,
    clearInputText,
  };
})();

export { searchBoxController };
