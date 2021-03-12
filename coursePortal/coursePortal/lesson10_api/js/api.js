
const city_id = 5604473;
const api_key = "a04a937677202ae37502ad9609a62fc3"
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a04a937677202ae37502ad9609a62fc3'


fetch(baseUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject)
        let current_temp = jsonObject['main']['temp'];

        let convertedtemp = parseFloat(1.8 * (current_temp - 273) + 32)
        convertedtemp = convertedtemp.toFixed(2)
        console.log(convertedtemp)
        document.getElementById("current-temp").textContent = convertedtemp

        //placing the icon
        const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsonObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    })