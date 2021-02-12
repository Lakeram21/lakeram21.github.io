var windchill = document.getElementById("windchill")

var temp = 50
var wind = 3 ** 0.16

var value = 35.74 + (0.6215 * temp) - (35.75 * wind) + (0.4275 * temp * wind)

var windValue = value.toFixed(2)
//console.log(windValue, wind)


windchill.innerHTML = windValue + " &#8457"