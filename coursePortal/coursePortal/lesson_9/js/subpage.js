
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
    .then((response) => {// this returns a promise and the 
        return response.json();
    })
    .then((jsonObject) => {
        ;  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns']
        console.log(towns)

        //getting the div that was created in the Html
        const cards = document.querySelector('.card')

        //creating preston div
        const preston = towns[5]
        console.log(preston)

        towns.forEach(town => {
            if (town.name == 'Preston' || town.name == "Fish Haven" || town.name == "Soda Springs") {

                const card = document.createElement('section')

                const info_container = document.createElement("div")
                const card_name = document.createElement('h3')

                const card_image_container = document.createElement("div")
                const card_image = document.createElement("img")

                const card_motto = document.createElement('p')
                card_motto.setAttribute('class', 'motto')
                const card_year = document.createElement('p')
                const card_pop = document.createElement('p')
                const card_rainfall = document.createElement('p')

                card_name.innerHTML = town.name

                card_image.setAttribute('src', 'image/' + town.photo)
                card_image.setAttribute('alt', `This is the image of ${town.name}`)

                card_motto.innerHTML = `"${town.motto}"`
                card_year.innerHTML = `Year Founded: ${town.yearFounded}`
                card_pop.innerHTML = `Population: ${town.currentPopulation}`
                card_rainfall.innerHTML = `Annual Rainfall: ${town.averageRainfall}`


                info_container.append(card_name)
                info_container.append(card_motto)
                info_container.append(card_year)
                info_container.append(card_pop)
                info_container.append(card_rainfall)

                card.append(info_container)
                card_image_container.append(card_image)
                card.append(card_image_container)

                cards.append(card)


            }

        })




    })





