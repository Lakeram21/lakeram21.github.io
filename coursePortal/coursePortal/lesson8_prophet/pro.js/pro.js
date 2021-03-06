// async and await function


// now i call the function and attached a error handeling to it
catchRainbow().catch(function (error) {
    console.log.error(error)
})
async function catchRainbow() {
    //set my response = to what is being fetch
    const response = await fetch('json api')
    // convert the reponse into a json readable object
    const json = await response.json();

    //use the data to store informaton
    const username = json['username']


}


/***********Tabupalr data********/
