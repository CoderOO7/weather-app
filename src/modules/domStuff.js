import { staticDomElements } from "./domElements.js";

const DOMStuff = (() => {
  const _mainModalEl = document.querySelector(".modal");

  const _hideMainModal = () => _mainModalEl.classList.add("hidden");
  const _showMainModal = () => _mainModalEl.classList.remove("hidden");

  const searchBoxErrorDom = (() => {
    const searchBoxErrorDisplayEl = staticDomElements.searchBoxErrorDisplayEl;
    function show(msg) {
      searchBoxErrorDisplayEl.textContent = msg;
    }
    function close() {
      searchBoxErrorDisplayEl.textContent = "";
    }

    return {
      show,
      close,
    };
  })();

  const errorMsgDom = (() => {
    const _errorMsgModalEl = document.querySelector(".err_msg_modal");
    const _errorMsgModalDisplayEl = document.querySelector(
      ".err_msg_modal__display"
    );

    function show(msg) {
      _showMainModal();
      _errorMsgModalEl.classList.remove("hidden");
      _errorMsgModalDisplayEl.textContent = msg;
    }

    function close() {
      _errorMsgModalEl.classList.add("hidden");
      _errorMsgModalDisplayEl.textContent = "";
      _hideMainModal();
    }

    return {
      show,
      close,
    };
  })();

  const loadingMsgDom = (() => {
    const _loadingMsgModalEl = document.querySelector(".loading_msg_modal");

    function show() {
      _showMainModal();
      _loadingMsgModalEl.classList.remove("hidden");
    }

    function close() {
      _loadingMsgModalEl.classList.add("hidden");
      _hideMainModal();
    }

    return {
      show,
      close,
    };
  })();

  return {
    errorMsgDom,
    loadingMsgDom,
    searchBoxErrorDom,
  };
})();

export { DOMStuff };
