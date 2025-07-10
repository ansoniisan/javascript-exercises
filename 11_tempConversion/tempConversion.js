const convertToCelsius = function (number) {
  let celsiusConversionFactor = 5 / 9;
  let intermediateCelsiusConversion = (number - 32) * celsiusConversionFactor;

  if (!Number.isInteger(intermediateCelsiusConversion)) {
    return parseFloat(intermediateCelsiusConversion.toFixed(1));
  };
  return intermediateCelsiusConversion;

};

const convertToFahrenheit = function (number) {
  let fahrenheitConversionFactor = 9 / 5;
  let intermediateFahrenheitConversion = number * fahrenheitConversionFactor + 32;

  if (!Number.isInteger(intermediateFahrenheitConversion)) {
    return parseFloat(intermediateFahrenheitConversion.toFixed(1));
  }
  return intermediateFahrenheitConversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
