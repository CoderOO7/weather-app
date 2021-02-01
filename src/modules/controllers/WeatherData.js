import {
  OPEN_WEATHER_API_BASE_URL,
  OPEN_WEATHER_API_KEY,
  OPEN_WEATHER_API_ENDPOINT_WEATHER,
} from "../constants.js";
import {
  mpsTokmph,
  mpsTomph,
  kelvinToCelsius,
  kelvinToFahrenheit,
} from "../helper.js";
import { staticDomElements, dynamicDomElements } from "../domElements.js";

const weatherDataController = (() => {
  const _localWeatherStore = [];

  function emptyStore() {
    _localWeatherStore.length = 0;
  }

  function addData(obj) {
    _localWeatherStore.push(obj);
  }

  function getData() {
    console.log(_localWeatherStore);
    return [..._localWeatherStore];
  }

  function getIconUrl(icon) {
    return `https://openweathermap.org/img/wn/${icon}@4x.png`;
  }

  async function fetchData(city) {
    try {
      let requestURL = `${OPEN_WEATHER_API_BASE_URL}/${OPEN_WEATHER_API_ENDPOINT_WEATHER}?q=${city}&appid=${OPEN_WEATHER_API_KEY}`;
      let response = await fetch(requestURL, { mode: "cors" });
      let weatherData = await response.json();

      emptyStore();
      addData(weatherData);
      return getData()[0];
    } catch (error) {
      console.error(error);
    }
  }

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
