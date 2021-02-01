import { staticDomElements } from "./domElements.js";
import { searchBoxController } from "./controllers/SearchBox.js";
import { weatherDataController } from "./controllers/WeatherData.js";

staticDomElements.searchBoxFormEl.addEventListener(
  "submit",
  searchBoxController.handleSearchBoxFormSubmit
);
staticDomElements.searchBoxFormClearBtnEl.addEventListener(
  "click",
  searchBoxController.clearInputText
);
staticDomElements.toggleTempSwitchInputEl.addEventListener(
  "click",
  weatherDataController.handleToggleTempSwitchClick
);
