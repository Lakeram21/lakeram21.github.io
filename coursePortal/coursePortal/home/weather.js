
let lat = '6.2736'
let lon = '-57.5403'
const API_key = "2cf3aac275bdef64e11d5d4326ef31fc"

let base_url = 'https://api.openweathermap.org/data/2.5/onecall?lat=6.2833&lon=-57.5333&appid=2cf3aac275bdef64e11d5d4326ef31fc'

fetch(base_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.log(jsonObject)
        let current = jsonObject['current']['feels_like']
        const humidity = jsonObject['current']['humidity']

        // console.log(humidity)


        //convert the temperature
        current = parseFloat(1.8 * (current - 273) + 32)
        current = current.toFixed(1)
        // console.log(current)

        //append current temp to a the html
        const weather = document.querySelector(".current_weather")
        const curr_weather = document.createElement('h3')
        curr_weather.innerHTML = `Curr Temp: ${current}&#8457`
        weather.append(curr_weather)

        //append the humidity
        const curr_hum = document.createElement('h3')
        curr_hum.innerHTML = `Humidity: ${humidity}`
        weather.append(curr_hum)

        //getting the descriptions
        const description = jsonObject['current']['weather'][0]['description']
        weather.append(`Detail: ${description}`)
        // console.log(description)
    })

