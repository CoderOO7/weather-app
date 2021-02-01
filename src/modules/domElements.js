const domElements = ((document) => {
  const staticDomElements = ((document) => {
    const contentLeftEl = document.querySelector(".content__left");
    const contentRightEl = document.querySelector(".content__right");
    const searchBoxFormEl = document.querySelector(".search_box__form");
    const searchBoxFormClearBtnEl = document.querySelector(
      ".search_box__btn--clear"
    );
    const searchBoxErrorDisplayEl = document.querySelector(
      ".search_box__error_display"
    );
    const mainModalEl = document.querySelector(".modal");
    const errorMsgModalEl = document.querySelector(".err_msg_modal");
    const errorMsgModalDisplayEl = document.querySelector(
      ".err_msg_modal__display"
    );
    const errorMsgModalCloseBtnEl = document.querySelector(
      ".err_msg_modal__btn--close"
    );
    const loadingMsgModalEl = document.querySelector(".loading_msg_modal");
    const toggleTempSwitchInputEl = document.querySelector(
      ".toggle_temp_switch__input"
    );

    return {
      contentLeftEl,
      contentRightEl,
      searchBoxFormEl,
      searchBoxFormClearBtnEl,
      searchBoxErrorDisplayEl,
      mainModalEl,
      errorMsgModalEl,
      errorMsgModalDisplayEl,
      errorMsgModalCloseBtnEl,
      loadingMsgModalEl,
      toggleTempSwitchInputEl,
    };
  })(document);

  const dynamicDomElements = ((document) => {
    function get() {
      const weatherCurrentTempValueEl = document.querySelector(
        ".weather_current__temp_value"
      );
      const weatherCurrentTempUnitEl = document.querySelector(
        ".weather_current__temp_unit"
      );
      const weatherCurrentWindSpeedEl = document.querySelector(
        ".weather_current__info_card_content--wind_speed"
      );
      return {
        weatherCurrentTempValueEl,
        weatherCurrentTempUnitEl,
        weatherCurrentWindSpeedEl,
      };
    }
    return { get };
  })(document);

  return {
    staticDomElements,
    dynamicDomElements,
  };
})(document);

export const { staticDomElements, dynamicDomElements } = domElements;
