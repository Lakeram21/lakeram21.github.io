let imagesToLoad = document.querySelectorAll("img[data-src]")

//this part is for testing the reaction time of the image

const imgOptions = {
    threshold: 2,
    rootMargin: "0px 0px 50px 0px"
}

//two function, one within the other. 
//It gets the image attribute src and resiets it to the
//data-src
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'))

    image.onload = () => {
        image.removeAttribute("data-src")
    }
}

//check if the image observer is supported

if ('IntersectionObserver' in window) {

    // creating an instance of the image observer
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            //it is checking if the image is being scrolled down then
            if (item.isIntersecting) {
                //when it is intersecting then we call the set attribute functionor 
                //switch the images
                loadImages(item.target);
                observer.unobserve(item.target)
            }
        })

    })
    //this helps to make sure that if it is not upported, it will still observe
    imagesToLoad.forEach((img) => {
        observer.observe(img)
    })
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img)
    })
}

