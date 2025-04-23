let userTemp = prompt("Enter a temperature in Fahrenheit");

alert(
  `${userTemp} degrees Fahrenheit is ${convertToCelsius(
    userTemp
  )} degrees Celsius, which is ${describeTemperature(userTemp)}!`
);
function convertToCelsius(Farenheit) {
  return Math.ceil((Farenheit - 32) * (5 / 9));
}

function describeTemperature(Farenheit) {
  const celsius = convertToCelsius(Farenheit);
  switch (true) {
    case celsius < 0:
      return "very cold";
    case celsius < 20:
      return "cold";
    case celsius < 30:
      return "warm";
    case celsius < 40:
      return "hot";
    case celsius >= 40:
      return "very hot";
  }
}
