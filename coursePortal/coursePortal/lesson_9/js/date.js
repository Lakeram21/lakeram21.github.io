var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August",
    "September", "October", "Noveber", "December"]

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


document.getElementById("datemodified").innerHTML = days[d.getDay()] + ", " + d.getDate() + ' ' + month[d.getMonth()] + " " + d.getUTCFullYear();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}

//
pancake_day = days[d.getDay()]
console.log(pancake_day)

if (pancake_day == "Friday") {

    var newItem = document.createElement("p");
    newItem.setAttribute("id", "pancake");
    var textnode = document.createTextNode("Saturday = Preston Pancakes in the Park! 9:00 a.m.");
    newItem.appendChild(textnode);

    var list = document.getElementById("header");
    list.insertBefore(newItem, list.childNodes[0]);



}


