/**
 * Remove all the children of DOM Node
 * @param {object} node - A DOM Node
 */
export const clearNode = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

/**
 * A timeout utility for promise
 * @param {number} time - Time in which promise will resolved
 * @return {Promise.<Object>} - A promise object that resolve after specified time.
 */
export const timeoutPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

/**
 * A request utility that send the request to provided url and return promise.
 * If no request method is provided then default GET request is made.
 * @param {string} url - url to which request initiated
 * @param {object} init  - Request parameters
 * @param {number} timeout - The API response timeout
 * @return {Promise.<Object>}  - A promise object that resolve either on API successful
 *                response within API response timeout limit or on API response time out.
 */
export const request = (url, init = {}, timeout) => {
  init = Object.assign({ mode: "cors" }, init);
  return Promise.race([fetch(url, init), timeoutPromise(timeout)]);
};

export const kelvinToCelsius = (kelvin) => {
  return `${Math.round(kelvin - 273.15)}`;
};

export const kelvinToFahrenheit = (kelvin) => {
  return `${Math.round((kelvin - 273.15) * (9 / 5) + 32)}`;
};

export const mpsTokmph = (mps) => {
  return `${Math.round(mps * 3.6)}`;
};

export const mpsTomph = (mps) => {
  return `${Math.round(mps * 2.23694)}`;
};
