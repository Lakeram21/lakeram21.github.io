

const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
    .then(function (response) {// this returns a promise and the 
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets']

        //getting the div that was created in the Html
        const cards = document.querySelector('.card')

        //looping thorough the prophet object
        prophets.forEach(prophet => {
            //create a section to place each prophet in 
            let card = document.createElement('section')
            let h1 = document.createElement('h2')

            //created this second div for the image so that I could do the padding for the image
            let imgDiv = document.createElement('div')
            //let card = document.createElement('section')
            //let card = document.createElement('section')
            h1.innerHTML = `${prophet.name} ${prophet.lastname}`

            // creating the image for each section
            let proImg = document.createElement("img")
            proImg.setAttribute('src', prophet.imageurl)
            proImg.setAttribute('alt', `This is the image of ${prophet.name} ${prophet.lastname}`)

            //cerating the other info for the cards
            const dataInfo = document.createElement('p')
            const placeInfo = document.createElement('p')

            dataInfo.innerHTML = `Date of Birth: ${prophet.birthdate}`
            placeInfo.innerHTML = `Place of Birth: ${prophet.birthplace}`
            //append that h1 to the section created
            card.append(h1)
            card.append(dataInfo)
            card.append(placeInfo)
            //append the card to the .cards in the html
            imgDiv.append(proImg)
            card.append(imgDiv)
            cards.append(card)
        })


    });