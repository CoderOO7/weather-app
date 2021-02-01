import { staticDomElements } from "./domElements.js";

const DOMStuff = (() => {
  const _mainModalEl = staticDomElements.mainModalEl;

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
    const _errorMsgModalEl = staticDomElements.errorMsgModalEl;
    const _errorMsgModalDisplayEl = staticDomElements.errorMsgModalDisplayEl;

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

  const loadingSpinnerDom = (() => {
    const _loadingSpinnerModalEl = staticDomElements.loadingSpinnerModalEl;

    function show() {
      _showMainModal();
      _loadingSpinnerModalEl.classList.remove("hidden");
    }

    function close() {
      _loadingSpinnerModalEl.classList.add("hidden");
      _hideMainModal();
    }

    return {
      show,
      close,
    };
  })();

  return {
    errorMsgDom,
    loadingSpinnerDom,
    searchBoxErrorDom,
  };
})();

export { DOMStuff };
