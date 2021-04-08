
fetch("company.json")
    .then(response => response.json())
    .then(jsonObject => {
        console.log(jsonObject["company"])

        //getting the main tag
        const company_main = document.querySelector(".company_section")
        let company = jsonObject["company"]


        // create the image/logo

        for (var i in company) {
            //create all the elements for the each comoany card
            let name = document.createElement("p")
            let address = document.createElement("p")
            const phone = document.createElement("p")
            const email = document.createElement("p")
            const image = document.createElement("img")
            // container element
            const card = document.createElement("div")
            card.setAttribute("class", "card")
            console.log(company[i])

            // create the image/logo
            image.setAttribute("src", `image/${company[i]["logo"]}`)
            image.setAttribute("alt", "companyimage")
            //attached to the card
            name.innerHTML = company[i]["name"]
            address.innerHTML = company[i]["address"]
            phone.innerHTML = company[i]["contact"]
            email.innerHTML = company[i]["email"]
            card.append(image, name, address, phone, email)
            company_main.append(card)

            i++

        }
    })