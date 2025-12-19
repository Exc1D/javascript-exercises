const convertToCelsius = function (temp) {
  temp = (temp - 32) * (5 / 9);
};

const convertToFahrenheit = function (temp) {
  temp = temp * (9 / 5) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
