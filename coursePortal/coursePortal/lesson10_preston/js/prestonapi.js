const city_id = 5604473;
const api_key = "a04a937677202ae37502ad9609a62fc3"
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a04a937677202ae37502ad9609a62fc3'

//the fetch method
fetch(baseUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject)
        let temp = jsonObject['main']['temp'];
        let max_temp = jsonObject['main']['temp_max'];
        let wind_speed = jsonObject['wind']['speed']
        let humidity = jsonObject['main']['humidity'];


        // current temperature
        let current_temp = parseFloat(1.8 * (temp - 273) + 32)
        current_temp = current_temp.toFixed(2)
        document.getElementById("current").textContent = current_temp

        //max temperature
        let maxtemp = parseFloat(1.8 * (max_temp - 273) + 32)
        maxtemp = maxtemp.toFixed(2)
        console.log(max_temp)
        document.getElementById("hightemp").textContent = maxtemp


        /******Calculating wind chill */
        var windchill = document.getElementById("windchill")
        document.getElementById("windspeed").textContent = wind_speed
        var wind = wind_speed ** 0.16

        var value = 35.74 + (0.6215 * current_temp) - (35.75 * wind) + (0.4275 * current_temp * wind)
        var windValue = value.toFixed(2)
        windchill.innerHTML = windValue

        // placing the Humidity
        document.getElementById("Humid").textContent = humidity

        //placing the icon
        // const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';  // note the concatenation
        // const desc = jsonObject.weather[0].description;  // note how we reference the weather array
        // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        // document.getElementById('icon').setAttribute('alt', desc);
    })