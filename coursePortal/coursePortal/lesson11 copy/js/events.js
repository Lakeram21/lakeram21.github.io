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
        const events = document.querySelector('.events')

        //creating preston div
        const preston = towns[1].events


        preston.forEach(element => {
            const event = document.createElement("p");
            event.innerHTML = element;
            events.append(event)

        });





    })


