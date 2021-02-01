import {
  OPEN_WEATHER_API_BASE_URL,
  OPEN_WEATHER_API_KEY,
  OPEN_WEATHER_API_ENDPOINT_WEATHER,
  API_TIMEOUT,
} from "../constants.js";
import {
  mpsTokmph,
  mpsTomph,
  kelvinToCelsius,
  kelvinToFahrenheit,
} from "../helper.js";
import { request } from "../helper.js";
import { staticDomElements, dynamicDomElements } from "../domElements.js";
import { DOMStuff } from "../domStuff.js";

const weatherDataController = (() => {
  const _localWeatherStore = [];

  function emptyStore() {
    _localWeatherStore.length = 0;
  }

  function addData(obj) {
    _localWeatherStore.push(obj);
  }

  function getData() {
    return [..._localWeatherStore];
  }

  /**
   * Retur the url for icon image based on the icon name.
   * @param {string} icon - The Icon name
   * @return {string} - The URL string of Icon image.
   */
  function getIconUrl(icon) {
    return `https://openweathermap.org/img/wn/${icon}@4x.png`;
  }

  /**
   * Fetch current weather data for given city using openWeather API.
   * @param {string} city - The city name for which current weather data needed.
   * @return {Promise.<Object>} - The Promise object which resolve as soon as
   * API response received.
   */
  async function fetchData(city) {
    try {
      DOMStuff.loadingSpinnerDom.show();

      let requestURL = `${OPEN_WEATHER_API_BASE_URL}/${OPEN_WEATHER_API_ENDPOINT_WEATHER}?q=${city}&appid=${OPEN_WEATHER_API_KEY}`;
      let response = await request(requestURL, {}, API_TIMEOUT);
      let weatherData = await response.json();

      emptyStore();
      addData(weatherData);
    } catch (error) {
      DOMStuff.loadingSpinnerDom.close();
      return Promise.reject(error);
    }

    DOMStuff.loadingSpinnerDom.close();
    return getData()[0];
  }

  /**
   * The Click event handler for Temperature Toggle Button
   * @param {object} - The Mouse 'Click' event
   */
  function handleToggleTempSwitchClick(e) {
    const toggleTempSwitchInputEl = staticDomElements.toggleTempSwitchInputEl;
    const weatherData = getData()[0];
    const dynamicDomEl = dynamicDomElements.get();

    if (toggleTempSwitchInputEl.checked) {
      //Celsius switch is active
      dynamicDomEl.weatherCurrentTempValueEl.textContent = kelvinToCelsius(
        weatherData.main.temp
      );
      dynamicDomEl.weatherCurrentTempUnitEl.textContent = "C";
      dynamicDomEl.weatherCurrentWindSpeedEl.textContent = `${mpsTokmph(
        weatherData.wind.speed
      )} km/h`;
    } else {
      //Fahrenheit switch is active
      dynamicDomEl.weatherCurrentTempValueEl.textContent = kelvinToFahrenheit(
        weatherData.main.temp
      );
      dynamicDomEl.weatherCurrentTempUnitEl.textContent = "F";
      dynamicDomEl.weatherCurrentWindSpeedEl.textContent = `${mpsTomph(
        weatherData.wind.speed
      )} mph`;
    }
  }

  return {
    addData,
    getData,
    fetchData,
    getIconUrl,
    handleToggleTempSwitchClick,
  };
})();

export { weatherDataController };
