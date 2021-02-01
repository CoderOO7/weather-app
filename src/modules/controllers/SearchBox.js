import { weatherDataController } from "./WeatherData.js";
import { staticDomElements } from "../domElements.js";
import { DOMStuff } from "../domStuff.js";
import { renderDOM } from "../render.js";
import { API_ERROR_DEFAULT_MSG } from "../constants.js";

const searchBoxController = (() => {
  /**
   * The Click event handler for SearchBox Clear button
   * @param {object} - The Mouse 'Click' event
   */
  function clearInputText(e) {
    const searchBoxFormEl = staticDomElements.searchBoxFormEl;
    searchBoxFormEl.elements.city.value = "";
  }

  /**
   * The Click event handler for SearchBox Search button
   * @param {object} - The Mouse 'Click' event
   */
  async function handleSearchBoxFormSubmit(e) {
    e.preventDefault();
    const searchBoxFormEl = staticDomElements.searchBoxFormEl;
    const city = searchBoxFormEl.elements.city.value.trim();

    if (city.length) {
      try {
        const weatherData = await weatherDataController.fetchData(city);

        if (weatherData.cod === "404") {
          DOMStuff.searchBoxErrorDom.show(weatherData.message);
          return;
        }

        DOMStuff.searchBoxErrorDom.close();
        renderDOM.weatherCurrent();
      } catch (err) {
        console.error(err);

        if (err.message) {
          DOMStuff.errorMsgDom.show(err.message);
        } else {
          DOMStuff.errorMsgDom.show(API_ERROR_DEFAULT_MSG);
        }
      }
    } else {
      DOMStuff.searchBoxErrorDom.show("Input cannot be blank");
    }
  }

  return {
    handleSearchBoxFormSubmit,
    clearInputText,
  };
})();

export { searchBoxController };
