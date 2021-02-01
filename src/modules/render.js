import { weatherDataController } from "./controllers/WeatherData.js";
import { staticDomElements } from "./domElements";
import { clearNode } from "./helper.js";
import { kelvinToCelsius, mpsTokmph } from "./helper.js";

const renderDOM = ((document) => {
  function weatherCurrent() {
    const contentLeftEl = staticDomElements.contentLeftEl;
    const weatherData = weatherDataController.getData()[0];
    clearNode(contentLeftEl);

    const _weatherCurrentEl = document.createElement("div");
    _weatherCurrentEl.classList.add("weather_current");

    const _weatherCurrentConditionEl = document.createElement("div");
    _weatherCurrentConditionEl.classList.add("weather_current__condition");
    _weatherCurrentConditionEl.textContent = weatherData.weather[0].description;

    const _weatherCurrentLocationEl = document.createElement("div");
    _weatherCurrentLocationEl.classList.add("weather_current__location");
    _weatherCurrentLocationEl.textContent = `${weatherData.name}, ${weatherData.sys.country}`;

    const _weatherCurrentTempEl = document.createElement("div");
    _weatherCurrentTempEl.classList.add("weather_current__temp");
    const _weatherCurrentTempValueEl = document.createElement("span");
    _weatherCurrentTempValueEl.classList.add("weather_current__temp_value");
    _weatherCurrentTempValueEl.textContent = kelvinToCelsius(
      weatherData.main.temp
    );
    const _weatherCurrentTempUnitEl = document.createElement("span");
    _weatherCurrentTempUnitEl.classList.add("weather_current__temp_unit");
    _weatherCurrentTempUnitEl.textContent = "C";

    _weatherCurrentTempEl.appendChild(_weatherCurrentTempValueEl);
    _weatherCurrentTempEl.appendChild(_weatherCurrentTempUnitEl);

    const _weatherCurrentInfoEl = document.createElement("div");
    _weatherCurrentInfoEl.classList.add("weather_current__info");

    const _weatherCurrentInfoCard1El = document.createElement("div");
    _weatherCurrentInfoCard1El.classList.add(
      "weather_current__info_card",
      "weather_current__info_card_wind"
    );

    const _weatherCurrentInfoCardHeading1El = document.createElement("span");
    _weatherCurrentInfoCardHeading1El.classList.add(
      "weather_current__info_card_heading"
    );
    _weatherCurrentInfoCardHeading1El.textContent = "Wind";

    const _weatherCurrentInfoCardIcon1El = document.createElement("img");
    _weatherCurrentInfoCardIcon1El.classList.add(
      "weather_current__info_card_icon"
    );
    _weatherCurrentInfoCardIcon1El.setAttribute(
      "src",
      "./assets/images/svg/wind.svg"
    );

    const _weatherCurrentInfoCardContent1El = document.createElement("span");
    _weatherCurrentInfoCardContent1El.classList.add(
      "weather_current__info_card_content",
      "weather_current__info_card_content--wind_speed"
    );
    _weatherCurrentInfoCardContent1El.textContent = `${mpsTokmph(
      weatherData.wind.speed
    )} km/h`;

    _weatherCurrentInfoCard1El.appendChild(_weatherCurrentInfoCardHeading1El);
    _weatherCurrentInfoCard1El.appendChild(_weatherCurrentInfoCardIcon1El);
    _weatherCurrentInfoCard1El.appendChild(_weatherCurrentInfoCardContent1El);

    const _weatherCurrentInfoCard2El = document.createElement("div");
    _weatherCurrentInfoCard2El.classList.add(
      "weather_current__info_card",
      "weather_current__info_card_humidity"
    );
    const _weatherCurrentInfoCardHeading2El = document.createElement("span");
    _weatherCurrentInfoCardHeading2El.classList.add(
      "weather_current__info_card_heading"
    );
    _weatherCurrentInfoCardHeading2El.textContent = "Humidity";
    const _weatherCurrentInfoCardIcon2El = document.createElement("img");
    _weatherCurrentInfoCardIcon2El.classList.add(
      "weather_current__info_card_icon"
    );
    _weatherCurrentInfoCardIcon2El.setAttribute(
      "src",
      "./assets/images/svg/humidity.svg"
    );
    const _weatherCurrentInfoCardContent2El = document.createElement("span");
    _weatherCurrentInfoCardContent2El.classList.add(
      "weather_current__info_card_content",
      "weather_current__info_card_content-humidity"
    );
    _weatherCurrentInfoCardContent2El.textContent = `${weatherData.main.humidity} %`;

    _weatherCurrentInfoCard2El.appendChild(_weatherCurrentInfoCardHeading2El);
    _weatherCurrentInfoCard2El.appendChild(_weatherCurrentInfoCardIcon2El);
    _weatherCurrentInfoCard2El.appendChild(_weatherCurrentInfoCardContent2El);

    const _weatherCurrentInfoCard3El = document.createElement("div");
    _weatherCurrentInfoCard3El.classList.add(
      "weather_current__info_card",
      "weather_current__info_card_pressure"
    );
    const _weatherCurrentInfoCardHeading3El = document.createElement("span");
    _weatherCurrentInfoCardHeading3El.classList.add(
      "weather_current__info_card_heading"
    );
    _weatherCurrentInfoCardHeading3El.textContent = "Pressure";
    const _weatherCurrentInfoCardIcon3El = document.createElement("img");
    _weatherCurrentInfoCardIcon3El.classList.add(
      "weather_current__info_card_icon"
    );
    _weatherCurrentInfoCardIcon3El.setAttribute(
      "src",
      "./assets/images/svg/pressure.svg"
    );
    const _weatherCurrentInfoCardContent3El = document.createElement("span");
    _weatherCurrentInfoCardContent3El.classList.add(
      "weather_current__info_card_content",
      "weather_current__info_card_content--pressure"
    );
    _weatherCurrentInfoCardContent3El.textContent = `${weatherData.main.pressure} hpa`;

    _weatherCurrentInfoCard3El.appendChild(_weatherCurrentInfoCardHeading3El);
    _weatherCurrentInfoCard3El.appendChild(_weatherCurrentInfoCardIcon3El);
    _weatherCurrentInfoCard3El.appendChild(_weatherCurrentInfoCardContent3El);

    _weatherCurrentInfoEl.appendChild(_weatherCurrentInfoCard1El);
    _weatherCurrentInfoEl.appendChild(_weatherCurrentInfoCard2El);
    _weatherCurrentInfoEl.appendChild(_weatherCurrentInfoCard3El);

    _weatherCurrentEl.appendChild(_weatherCurrentConditionEl);
    _weatherCurrentEl.appendChild(_weatherCurrentLocationEl);
    _weatherCurrentEl.appendChild(_weatherCurrentTempEl);
    _weatherCurrentEl.appendChild(_weatherCurrentInfoEl);

    contentLeftEl.appendChild(_weatherCurrentEl);
  }

  return { weatherCurrent };
})(document);

export { renderDOM };
