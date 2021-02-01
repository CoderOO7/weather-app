export const clearNode = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
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
