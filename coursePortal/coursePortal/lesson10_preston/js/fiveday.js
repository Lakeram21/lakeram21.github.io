
// const city_id2 = 5604473;
// const api_key2 = "cfb6decd924d6304a3734e2af3958c33"
// const baseUrl = "api.openweathermap.org/data/2.5/forecast/daily?id=5604473&cnt=5&appid=a04a937677202ae37502ad9609a62fc3"

// fetch(baseUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         console.log(jsonObject)


//     })

let key = 'a04a937677202ae37502ad9609a62fc3'
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a04a937677202ae37502ad9609a62fc3'

fetch(baseUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let main = jsonObject["list"]
        let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

        //getting the table class names
        const day_list = document.querySelector(".foredays")
        const temp_list = document.querySelector(".foretemp")
        const temp_icon = document.querySelector(".foreicon")

        let string2 = '18:00:00'
        for (var i = 0; i < main.length; i++) {

            let d = new Date(main[i].dt_txt)
            let filt = main[i].dt_txt
            let filterr = filt.includes(string2)
            if (filterr) {
                console.log("this is the data" + daysOfWeek[d.getDay()])

                //Creating the Dates for the five days
                const day = document.createElement("th")
                day_detail = daysOfWeek[d.getDay()]
                day.innerHTML = day_detail
                day_list.append(day)

                // creating the temperate forcast
                const temp_detail = document.createElement('th')

                let tempconvert = main[i].main.temp
                tempconvert = parseFloat(1.8 * (tempconvert - 273) + 32)
                tempconvert = tempconvert.toFixed(1)
                temp_detail.innerHTML = `${tempconvert}&#8457`
                temp_list.append(temp_detail)

                // Placing the Icon
                let icon_table = document.createElement('td')
                let icon_img = document.createElement('img')

                icon_img.setAttribute('src', `https://openweathermap.org/img/w/${main[i].weather[0].icon}.png`)
                icon_img.setAttribute('alt', `This is the image of ${main[i].weather[0].description}`)

                icon_table.append(icon_img)
                temp_icon.append(icon_table)

            }


        }


    })