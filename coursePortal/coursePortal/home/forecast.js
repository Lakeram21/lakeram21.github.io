let latt = '6.2736'
let lonn = '-57.5403'
const API_keys = "2cf3aac275bdef64e11d5d4326ef31fc"

let base_urls = 'https://api.openweathermap.org/data/2.5/onecall?lat=6.2833&lon=-57.5333&appid=2cf3aac275bdef64e11d5d4326ef31fc'

fetch(base_urls)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject['daily'])

        let daily = jsonObject['daily']
        const forecast = document.querySelector('.forecast')
        const day_one = document.createElement('h2')
        const day_two = document.createElement('h2')
        const day_three = document.createElement('h2')

        // Looping to get the first three days in the object.
        for (i = 1; i < 4; i++) {

            if (i === 1) {
                let day1 = daily[i]['feels_like']['day']
                day1 = parseFloat(1.8 * (day1 - 273) + 32)
                day1 = day1.toFixed(1)

                day_one.innerHTML = `${day1}&#8457 `
                forecast.append(day_one)
                console.log(day1)
            }
            if (i === 2) {
                let day2 = daily[i]['feels_like']['day']
                day2 = parseFloat(1.8 * (day2 - 273) + 32)
                day2 = day2.toFixed(1)

                day_two.innerHTML = `${day2}&#8457 `
                forecast.append(day_two)

                console.log(day2)
            }
            if (i === 3) {
                let day3 = daily[i]['feels_like']['day']
                day3 = parseFloat(1.8 * (day3 - 273) + 32)
                day3 = day3.toFixed(1)

                day_three.innerHTML = `${day3}&#8457`
                forecast.append(day_three)

                console.log(day3)
            }





        }


    })