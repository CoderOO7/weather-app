import { staticDomElements } from "./domElements.js";
import { searchBoxController } from "./controllers/SearchBox.js";
import { weatherDataController } from "./controllers/WeatherData.js";
import { DOMStuff } from "./domStuff.js";

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
staticDomElements.errorMsgModalCloseBtnEl.addEventListener("click", (e) =>
  DOMStuff.errorMsgDom.close()
);

window.addEventListener("unhandledrejection", function (event) {
  console.group("Global Promise Reject");
  console.error(event.promise);
  console.error(event.reason);
  console.groupEnd();
});
